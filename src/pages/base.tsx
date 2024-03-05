import { Col, Row } from "react-bootstrap";
import baseItems from "../data/cannonKeyboards.json";
import { BaseItem } from "../components/BaseItem";
import Copyright from "../components/Copyright";

export function Base() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {baseItems.map((item) => (
          <Col key={item.name}>
            <BaseItem {...item} />
          </Col>
        ))}
      </Row>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}