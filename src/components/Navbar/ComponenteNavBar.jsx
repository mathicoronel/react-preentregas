import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

function ComponenteNavBar() {
    return (
    <Navbar expand="lg" className="navbar-container bg-body-tertiary">
        <Container>
            <Link to="/">
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <Link to="/category/Running">
                    <NavDropdown.Item href="#action/3.1">Running</NavDropdown.Item>
                </Link>
                <Link to="/category/Deportivas">
                    <NavDropdown.Item href="#action/3.2">
                    Deportivas
                    </NavDropdown.Item>
                </Link>
                <Link to="/category/Exclusive">
                    <NavDropdown.Item href="#action/3.3">
                    Exclusive
                    </NavDropdown.Item>
                </Link>
                </NavDropdown>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default ComponenteNavBar;
