import { Container, Navbar, Nav, NavDropdown, Row, Col, Button, Image, ListGroup } from 'react-bootstrap';

//https://aerportfoliobucket.s3.amazonaws.com/MyMainPic.jpg

function MyAbout() {
  let pfp = "https://aerportfoliobucket.s3.amazonaws.com/MyMainPic.jpg";
    return (
        <Row id="MyAbout">
          
          <Col className="d-flex  align-items-center justify-content-center" xs={4}>
            <Image  fluid roundedCircle src={pfp}></Image>
          </Col>
          <Col id="aboutDescription">
            <Row >
              <h1 className="text-center">About Me:</h1>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </Row>
            <Row>
            <ListGroup className="justify-content-center" horizontal>
              <ListGroup.Item>
                <Button id="profile-link" target="_blank" rel="noopener noreferrer" href="https://github.com/AlexRaschid">
                  <i className="fa-brands fa-github"></i>
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-raschid/">
                <i className="fa-brands fa-linkedin-in"></i>
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/alexraschid">
                <i className="fa-brands fa-free-code-camp"></i>
                </Button>
              </ListGroup.Item>
            </ListGroup>
            </Row>
            <Row>
              
            </Row>
          </Col>
        </Row>
    );
  }
  
export default MyAbout;