import React from 'react';
import {Container , Nav , Navbar, NavDropdown} from "react-bootstrap";
import "./navbar.css";

const Navbarr = () => {
  return (
    <div className='navbarr'>
      <Navbar bg="dark" expand="lg" className='my-site'>
  <Container>
    <Navbar.Brand href="#home" className='brand'>E-Commerse Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
      <Nav.Link href="#home">Sign Up</Nav.Link>
        <Nav.Link href="#link">LogIn</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarr