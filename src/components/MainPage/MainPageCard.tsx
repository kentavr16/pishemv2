import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



interface IButtonProps {
    title: string,
    text: string
    image: string,
    cardFooter: string
}

export function MainPageCard({
    title,
    text,
    image,
    cardFooter
}: IButtonProps) {

    return (
        <Container style={{
            fontFamily: "'Comfortaa', cursive",
            height: "100vh",
            paddingTop: "150px"
        }}>
            <Row style={{ height: "150px" }}>
                <Col style={{ fontSize: "50px" }}>{title}</Col>
            </Row>
            <Row>
                <Col style={{ display: "flex", alignItems: "center" }}>
                    {text}
                </Col>
                <Col>
                    <img src={image} alt={title} style={{
                        width: "500px",
                        marginTop: "10px",
                        borderRadius: "15px",
                        border: "1px black solid"
                    }} />
                </Col>

            </Row>
            <Row style={{ height: "150px" }}>
                <Col style={{
                    fontSize: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>{cardFooter}</Col>
            </Row>
        </Container>
    )
}