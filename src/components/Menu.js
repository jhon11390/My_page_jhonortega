import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

function Menu () {
  return (
    <div style={{position: "fixed", width: "100%", top: "0", zIndex: "10"}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#Start">
          <img
            src="logoblanco.png"
            width="120"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#About-me">Acerca de mi</Nav.Link>
            <Nav.Link href="#Formation">Formacion</Nav.Link>
            <Nav.Link href="#Projects">Proyectos</Nav.Link>

            <Nav.Link eventKey={2} href="#Contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;