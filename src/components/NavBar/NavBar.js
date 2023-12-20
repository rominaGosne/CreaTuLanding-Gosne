import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Nav, Container } from "react-bootstrap"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <Navbar bg="dark" expand="lg" data-bs-theme="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Productos</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <CartWidget/>
                </Navbar>
            </div>
        </nav>
    )
}

export default NavBar