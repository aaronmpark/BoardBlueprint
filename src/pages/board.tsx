import { Col, Row } from "react-bootstrap";
import boardItems from "../data/cannonKeyboards.json";
import { BoardItem } from "../components/BoardItem";
import Copyright from "../components/Copyright";

export function Board() {
  return (
    <>
      <h1>Boards</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {boardItems.map((item) => (
          <Col key={item.id}>
            <BoardItem {...item} />
          </Col>
        ))}
      </Row>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
