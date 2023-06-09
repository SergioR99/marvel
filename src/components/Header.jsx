import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../Assets/Images/marvel.svg";
import notificacion from "../Assets/Images/notificacion.svg";
import configuracion from "../Assets/Images/configuracion.svg";
import "../Css/Header.css";


const Navegacion = () => {

    return (
        <>
            <Navbar className="p-0 navegadorGeneral">
                <Container>
                    <Navbar.Brand href="#home" className="pe-5">
                    <img alt="" src={logo} width="120"  className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto items-menu">
                        <Nav.Link href="#home" id="item-menu" className="p-4">Home</Nav.Link>
                        <Nav.Link href="#features" className="p-4">Personajes</Nav.Link>
                    </Nav>
                    <div className="iconoHeader">
                        <ul className="d-flex list-unstyled m-0">
                            <li className="iconoHeader--item px-2">
                                <img className="iconoHeader--item__imagen" src={notificacion} alt="" />
                            </li>
                            <li className="iconoHeader--item px-2">
                                <img className="iconoHeader--item__imagen" src={configuracion} alt="" />
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export  { Navegacion }