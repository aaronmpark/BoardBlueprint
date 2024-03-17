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
    increaseCartQuantity: (type: string, id: number) => void
    removeFromCart: (type: string, id: number) => void
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    type: string
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

    function increaseCartQuantity(type: string, id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.type == null) {
                return [...currItems, { type, id }]
            }
            else {
                return [...currItems, { type, id }]
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