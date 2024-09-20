import { Container, Row, Col, Button } from 'react-bootstrap';
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
              Want to see more? Access our page on GitHub!
            </p>
            <Button variant="primary" href="https://github.com/aaronmpark/BoardBlueprint" target="_blank">
              Visit GitHub
            </Button>
          </Col>
          <Col md={6} sm={12}>
            <p>
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