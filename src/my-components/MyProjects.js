
import { Container, Navbar, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';

function MyProjects() {
    return (
        <Row id="projects">
            <Col>

            <Card>
              
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                  Short Context
                </Card.Text>
                <Row>
                  <Col xs={4}>
                  Useful Info plus a button
                  </Col>
                  
                  <Col>
                  Description
                  </Col>
                </Row>
                
              </Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>

            </Col>
        </Row>
    );
  }
  
export default MyProjects;