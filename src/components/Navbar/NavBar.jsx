import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Logo from "../Logo/Logo"
import Widget from "../Widget/Widget"

import './NavBar.css'


function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
        
          <Navbar.Brand href="#home"><Logo/>Lotus Yoga</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Programas">Programas de Yoga</Nav.Link>
              <Nav.Link href="#Libros">Libros</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Productos Naturales
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Yoga Mats
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Cosmetica
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Widget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
