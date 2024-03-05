import { Col, Row } from "react-bootstrap";
import keycapItems from "../data/cannonKeycaps.json";
import { KeycapItem } from "../components/KeycapItem";
import Copyright from "../components/Copyright";

export function Keycaps() {
  return (
    <>
      <h1 className="mt-4 mb-4">Keycaps</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {keycapItems.map((item) => (
          <Col key={item.id}>
            <KeycapItem {...item} />
          </Col>
        ))}
      </Row>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
