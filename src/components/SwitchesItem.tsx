import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

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
  return (
    <Card className="t-2 mb-3">
      <Card.Img variant="top" src={img} height="400px" />
      <Card.Body>
        <Card.Title className="fs-4">{name}</Card.Title>
        <Card.Text className="fs-5 text-muted">{price}</Card.Text>
        <div className="mt-auto">
          {identity !== id ? (
            <Button
              className="w-100 mt-1 mb-2"
              onClick={() => {
                increaseCartQuantity("switches", id);
                handleNavigation();
              }}
            >
              + Add to Cart
            </Button>
          ) : identity === id ? (
            <Button
              className="w-100 mt-1 mb-2"
              onClick={() => removeFromCart("switches", id)}
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
