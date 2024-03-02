import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

import { useNavigate } from 'react-router-dom'

//Home page for "keyboards" (for now named "Home", future change this name)
//jt Repo'd 'StoreItem.tsx', major changes: removed all occurences of 'price' as it's unnecessary here

type HomeItemProps = {
    id: number
    name: string
    imgUrl: string
}


export function HomeItem({ id, name, imgUrl }:
    HomeItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    const navigate = useNavigate()


    const navigateSite = (names: string) => {
        navigate(names)
    }


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
                <Button className="w-100" onClick={() => navigateSite(name)}>+ Add</Button>
            </div>
        </Card.Body>
    </Card>
    )
}