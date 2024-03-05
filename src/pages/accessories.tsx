import { Col, Row } from "react-bootstrap";
import accessoriesItems from "../data/cannonAccessories.json";
import { AccessoriesItem } from "../components/AccessoriesItem";
import Copyright from "../components/Copyright";

export function Accessories() {
  return (
    <>
      <h1>Accessories</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {accessoriesItems.map((item) => (
          <Col key={item.id}>
            <AccessoriesItem {...item} />
          </Col>
        ))}
      </Row>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
