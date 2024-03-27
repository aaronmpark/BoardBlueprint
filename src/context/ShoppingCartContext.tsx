import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

// file that describes all of the different functions necessary to make the cart work



type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemType: (type: string) => number
    getItemValue: (type: string, key: keyof Omit<CartItem, 'id' | 'type'>) => string
    increaseCartQuantity: (type: string, id: number, name: string, img: string, link: string, price: string) => void
    removeFromCart: (type: string, id: number) => void
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    type: string
    name: string
    img: string
    link: string
    price: string
}

const ShoppingCartContext = createContext({} as
    ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])

    const [isOpen, setIsOpen] = useState(false)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemType(type: string) {
        return cartItems.find(item => item.type === type)?.id || 0
    }

    function getItemValue(type: string, key: keyof Omit<CartItem, 'id' | 'type'>) {
        return cartItems.find(item => item.type === type)?.[key] || ""
    }

    function increaseCartQuantity(type: string, id: number, name: string, img: string, link: string, price: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.type == null) {
                return [...currItems, { type, id, name, img, link, price }]
            }
            else {
                return [...currItems, { type, id, name, img, link, price }]
            }
        })
    }

    function removeFromCart(type: string, id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.type != null) {
                return currItems.filter(item => item.type !== type)
            }
            return currItems
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemType,
            increaseCartQuantity,
            getItemValue,
            openCart,
            closeCart,
            cartItems,
            removeFromCart
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}