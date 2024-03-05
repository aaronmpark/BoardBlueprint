import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import Copyright from "../components/Copyright";

export function Store() {
  return (
    <>
      <h1 className="mt-4 mb-4">Store</h1>
      <Row md={2} xs={1} lg={3}>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <footer className="fixed-bottom">
        <Copyright />
      </footer>
    </>
  );
}
