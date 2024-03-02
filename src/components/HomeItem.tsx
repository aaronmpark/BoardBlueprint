import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"


//Home page for "keyboards" (for now named "Home", future change this name)
//jt Repo'd 'StoreItem.tsx', major changes: removed all occurences of 'price' as it's unnecessary here

type HomeItemProps = {
    id: number
    name: string
    imgUrl: string
}

export function HomeItem({id, name, imgUrl }:
    HomeItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (<Card className="h-100">
        <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={
                { objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between
            align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add</Button>
                ) : <div className="d-flex align-items-center 
                flex-column" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center 
                    justify-content-center" style={{ gap: ".5rem" }}>

                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button onClick={() => removeFromCart(id)}
                        variant="danger"
                        size="sm"
                    >
                        Remove
                    </Button>

                </div>}
            </div>
        </Card.Body>
    </Card>
    )
}