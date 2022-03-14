import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Social Media Site</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to="/" style={{ textDecoration: 'none' , color: 'inherit'}}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/posts" style={{ textDecoration: 'none' , color: 'inherit'}}>Posts</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link ><Link to="/register"  style={{ textDecoration: 'none' , color: 'inherit'}}>Sign Up</Link></Nav.Link>
      <Nav.Link eventKey={2} >
        <Link to="/login"  style={{ textDecoration: 'none' , color: 'inherit'}}>Login</Link> 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavbarComponent