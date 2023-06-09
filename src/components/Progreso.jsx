import { Col, Container, Image, Row } from "react-bootstrap"
import "../Css/Progreso.css"

const Progreso = () => {
    return (
        <>
            <Container className="mt-5 position-relative">
                <Row>
                    <Col sm className="p-2 mx-1 pt-4 contenedorSuperior">
                        <h3 className="contenedorSuperior__titulo">Progeso de películas reproducidas</h3>
                        <p className="contenedorSuperior__progreso">100 películas<br/>Meta de producción</p>   
                    </Col>

                    <Col sm className="p-2 mx-1 contenedorSuperior">
                        <iframe width="100%" height="100%" title="Trailer" src="https://www.youtube.com/embed/oBmazlyP220" frameborder="0" ></iframe>
                    </Col>

                    <Col sm className="p-2 mx-1 contenedorSuperior">
                        <Image src="https://cdn.vox-cdn.com/thumbor/zO8IA4b5-SlEM51UMx3NGfRJJp4=/0x410:3975x2688/1200x675/filters:focal(2564x730:3200x1366)/cdn.vox-cdn.com/uploads/chorus_image/image/69960045/RCO002_w_1633520830.0.jpeg" fluid></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export { Progreso }