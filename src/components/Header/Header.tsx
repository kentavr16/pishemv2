import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function Header() {

    return (
        <div >
            <Nav style={{
                border: "1px solid gray",
                position: "fixed",
                width: "100vw",
                backgroundColor: "#e2e2e2",
                opacity: "0.9"
            }}

                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Container>
                    <Row>
                        <Col style={{ textAlign: "center", padding: "20px", margin: "5px", fontSize: "25px" }}>Пишемо за вас!</Col>
                        <Col>
                            <Nav.Item >
                                <Nav.Link href="/home">На головну</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Галерея робіт</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Про нас</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled">
                                    Замовлення послуг
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </div>)
}