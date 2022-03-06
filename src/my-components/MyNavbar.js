import { Container, Navbar, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar id="navbar" bg="light" variant="light" className="bg-transparent" fixed="top">
          <Container>
          <Navbar.Brand href="#home">Alexander Raschid</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    );
  }
  
export default MyNavbar;