import { Container, Row, Col } from 'react-bootstrap';
import Copyright from "../components/Copyright";

export function About() {
  return (
    <>
      <Container className="mt-4 mb-4">
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <p>
              Want to see more? .... skarner skarner skarner
            </p>
          </Col>
          <Col md={6} sm={12}>
            <p>
              github here or some shit idk
            </p>
          </Col>
        </Row>
      </Container>
      <footer className="fixed-bottom">
        <Copyright />
      </footer>
    </>
  );
}
