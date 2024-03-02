import { Col, Row } from "react-bootstrap"
import homeItems from "../data/keyboard.json"
import { HomeItem } from "../components/HomeItem"

export function Home() {
    return <><h1>Home</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {homeItems.map(item => (
                <Col key={item.id}>
                    <HomeItem {...item} />
                </Col>
            ))}
        </Row>

    </>
}