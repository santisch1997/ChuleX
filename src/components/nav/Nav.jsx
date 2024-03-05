import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

function Navigation({ className }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={`navbar ${className}`}>
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">¿Quien soy?</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Imobiliario</NavDropdown.Item>
              <NavDropdown.Item href="#">Turismo</NavDropdown.Item>
              <NavDropdown.Item href="#">Marcas</NavDropdown.Item>
              <NavDropdown.Item href="#">Deportes</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio">Todos los proyectos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;