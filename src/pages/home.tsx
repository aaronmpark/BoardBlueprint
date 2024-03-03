import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import homeItems from '../data/keyboard.json'
import { HomeItem } from '../components/HomeItem'

export function Home() {
    return ( <> <h1 className = "mt-3">Home</h1>
            <Container>
                <Row className="mt-3">
                    <Col xs={12} md={4} className="g-3">
                        <ListGroup>
                            {homeItems.map(item => (
                                <HomeItem key={item.id} {...item} />
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}