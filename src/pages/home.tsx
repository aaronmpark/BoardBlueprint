import { Row, Col, ListGroup } from "react-bootstrap";
import homeItems from "../data/keyboard.json";
import { HomeItem } from "../components/HomeItem";
import Copyright from "../components/Copyright";

export function Home() {
  return (
    <>
      <h1 className="mt-4 mb-4">Home</h1>
      <Row>
        <Col xs={16} md={8}>
          <ListGroup>
            {homeItems.map((item) => (
              <HomeItem key={item.id} {...item} />
            ))}
          </ListGroup>
        </Col>
      </Row>
      <footer className="fixed-bottom">
        <Copyright />
      </footer>
    </>
  );
}
