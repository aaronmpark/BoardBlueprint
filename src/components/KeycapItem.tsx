import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

// Stores the items within the shopping cart

type StoreItemProps = {
    id: number;
    name: string;
    price: string;
    img: string;
    link: string;
};

export function KeycapItem({ id, name, price, img, link }: StoreItemProps) {
    const { getItemType, increaseCartQuantity, removeFromCart } =
        useShoppingCart();
    const identity = getItemType("keycaps");
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/home");
    };
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card className="t-2 mb-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title
                    className="fs-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? (
                        <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                    ) : (
                        <span>{name}</span>
                    )}</Card.Title>
                <Card.Text className="fs-5 text-muted">{price}</Card.Text>
                <div className="mt-auto">
                    {identity !== id ? (
                        <Button
                            className="w-100 mt-1 mb-2"
                            onClick={() => {
                                increaseCartQuantity("keycaps", id, name, img, link, price);
                                handleNavigation();
                            }}
                        >
                            + Add to Cart
                        </Button>
                    ) : identity === id ? (
                        <Button
                            className="w-100 mt-1 mb-2"
                            onClick={() => removeFromCart("keycaps", id)}
                            variant="danger"
                        >
                            Remove
                        </Button>
                    ) : (
                        <Button>ERROR</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
