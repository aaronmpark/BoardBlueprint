import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import homeItems from '../data/keyboard.json'
import { HomeItem } from '../components/HomeItem'

export function Home() {
    return (
        <>
            <style>{`
                .page-container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                .content-wrap {
                    flex: 1;
                }
                .footer {
                    width: 100%;
                    background: #ffffff;
                    color: black;
                    text-align: center;
                    padding: 25px 0;
                }
            `}</style>
            <div className="page-container">
                <div className="content-wrap">
                    <Container>
                        <h1 className="mt-3">Keyboards</h1>
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
                </div>
                <footer className="footer">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </footer>
            </div>
        </>
    );
}