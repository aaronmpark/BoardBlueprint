import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
//Home page for "keyboards" (for now named "Home", future change this name)
//added 'navigateTo', which just directly navigates to specified page (i.e. "base" to base.tsx)

type HomeItemProps = {
  name: string;
  imgUrl: string;
  navigateTo: string;
};

export function HomeItem({ name, imgUrl, navigateTo }: HomeItemProps) {
  const navigate = useNavigate();

  const { getItemType, getItemValue, removeFromCart } = useShoppingCart();

  const handleNavigation = () => {
    navigate(navigateTo);
  };

  const lowerName = name.toLowerCase();
  const flag = getItemType(lowerName);

  const itemDetails = {
    id: getItemType(lowerName),
    image: getItemValue(lowerName, "img"),
    price: getItemValue(lowerName, "price"),
    itemName: getItemValue(lowerName, "name"),
    link: getItemValue(lowerName, "link")
  };

  const url = itemDetails.link;
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div>
      {flag === 0 ? (
        <ListGroup className="h-100">
          <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <img
                src={imgUrl}
                alt={name}
                style={{
                  width: "90px",
                  height: "90px",
                  marginRight: "13%",
                  objectFit: "contain",
                }}
              />
              <span className="fw-medium position-absolute top-50 start-50 translate-middle">
                {name}
              </span>
            </div>
            <Button variant="btn btn-outline-secondary" onClick={handleNavigation}>
              + Add
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        <ListGroup className="h-100">
          <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <img
                src={itemDetails.image}
                alt={name}
                style={{
                  width: "90px",
                  height: "90px",
                  marginRight: "13%",
                  objectFit: "contain",
                }}
              />
              <span className="fw-medium position-static top-50 start-50 ">
                {itemDetails.price}
              </span>
            </div>
            <div>
              <span className="fw-medium position-static top-50 start-50">
                {itemDetails.itemName}
              </span>
            </div>
            <div>
              <Button variant="btn btn-outline-secondary" onClick={() => handleClick()}>
                +
              </Button>
              <Button variant="btn btn-outline-secondary" onClick={() => removeFromCart(lowerName, itemDetails.id)}>
                X
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
}
