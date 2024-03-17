import { Button, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

// Stores the items within the shopping cart

type StoreItemProps = {
  id: number;
  name: string;
  price: string;
  img: string;
  link: string;
};

export function BoardItem({ id, name, price, img, link }: StoreItemProps) {
  const { getItemType, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const identity = getItemType("board");

  return (
    <CardGroup>
      <Card className="t-2 mb-3">
        <Card.Img variant="top" src={img} height="200px" />
        <Card.Body>
          <Card.Title className="fs-4">{name}</Card.Title>
          <Card.Text className="fs-5 text-muted">{price}</Card.Text>
          <div className="mt-auto">
            {identity !== id ? (
              <Button
                className="w-100 mt-1 mb-2"
                onClick={() => increaseCartQuantity("board", id)}
              >
                + Add to Cart
              </Button>
            ) : identity === id ? (
              <Button
                className="w-100 mt-1 mb-2"
                onClick={() => removeFromCart(id)}
                variant="danger"
              >
                Remove
              </Button>
            ) : (
              <Button>GG</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

/*
EXAMPLE OF NAVIGATING back to HOME
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
<Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex justify-content-between
            align-items-baseline mb-4"
        >
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100" onClick={() => navigate("/home")}>
            + Add to Cart
          </Button>
          <div
            className="d-flex align-items-center 
                flex-column"
            style={{ gap: ".5rem" }}
          ></div>
        </div>
      </Card.Body>
    </Card> */
