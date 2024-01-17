import { Link } from 'react-router-dom';
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
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link to={'/'} className="mx-3"> Home </Link>
                                    <Link to={'/category/celular'} className="mx-3"> Celulares </Link>
                                    <Link to={'/category/tablet'} className="mx-3"> Tablet </Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <CartWidget />
                </Navbar>
            </div>
        </nav>
    )
}

export default NavBar;