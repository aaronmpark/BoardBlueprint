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

export function SwitchesItem({ id, name, price, img, link }: StoreItemProps) {
    const { getItemType, increaseCartQuantity, removeFromCart } =
        useShoppingCart();
    const identity = getItemType("switches");
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/home");
    };
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={img}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
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
                        <Button className="w-100" onClick={() => {
                            increaseCartQuantity("switches", id, name, img, link, price);
                            handleNavigation();
                        }}>
                            + Add to Cart
                        </Button>
                    ) : identity === id ? (
                        <div
                            className="d-flex align-items-center 
                flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center 
                    justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                            </div>
                            <Button
                                onClick={() => removeFromCart("switches", id)}
                                variant="danger"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    ) : (
                        <Button>
                            GG BRO
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
