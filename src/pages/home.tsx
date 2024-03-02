import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import homeItems from '../data/keyboard.json'
import { HomeItem } from '../components/HomeItem'

export function Home() {
    return ( <> <h1>Home</h1>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={4}>
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