import { Col, Row } from "react-bootstrap";
import switchesItems from "../data/cannonSwitches.json";
import { SwitchesItem } from "../components/SwitchesItem";
import Copyright from "../components/Copyright";

export function Switches() {
  return (
    <>
      <h1>Switches</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {switchesItems.map((item) => (
          <Col key={item.id}>
            <SwitchesItem {...item} />
          </Col>
        ))}
      </Row>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
