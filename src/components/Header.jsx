import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../Assets/Images/marvel.svg";
import "../Css/Header.css";


const Navegacion = () => {
    return (
        <>
            <Navbar className="p-0">
                <Container>
                    <Navbar.Brand href="#home" className="pe-5">
                    <img alt="" src={logo} width="120"  className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto items-menu">
                        <Nav.Link href="#home" className="p-4">Home</Nav.Link>
                        <Nav.Link href="#features" className="p-4">Personajes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export  { Navegacion }