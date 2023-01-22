import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { CSSProperties, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import "./MainPageCard.css"


interface IButtonProps {
    imgOrder?: CSSProperties,
    num: number,
    title: string,
    text: string
    image: string,
    cardFooter: string
}

export function MainPageCard({
    imgOrder,
    num,
    title,
    text,
    image,
    cardFooter
}: IButtonProps) {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const [opacity, setOpacity] = useState({ opacity: 0, transition: "opacity 1s" })
    useEffect(() => {
        inView ? setOpacity({ opacity: 1, transition: "opacity 2s" }) : setOpacity({ opacity: 0, transition: "opacity 1s" });


    }, [inView])
    return (
        <div className='wrapper' style={opacity} >
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
                    <Col style={imgOrder ? imgOrder : {}}>
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
                <Row style={{ height: "15px", marginBottom: "50px" }}>
                    <Col ref={ref} style={{ fontSize: "30px" }}>-
                        {num}  -</Col>
                </Row>

            </Container>
        </div>
    )
}