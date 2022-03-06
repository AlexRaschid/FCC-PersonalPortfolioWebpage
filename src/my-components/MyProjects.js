
import { useState } from 'react';
import { ListGroup, Container, Navbar, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';

function MyProjects() {

  const [projects, setProjects] = useState([
        { 
          id: 1,
          title: "Attack of the Surfboards",
          link: "https://alexraschid.github.io/attack_of_the_surfboards/",
          description: "State Description"
        },
        { 
          id: 2,
          title: "Jokinator9000",
          link: "https://alexraschid.github.io/FCC-RandomQuoteMachine/",
          description: "State Description"
        },
        { 
          id: 3,
          title: "wordScript",
          link: "https://rawgit.com/andreGarvin/wordScript/master/index.html",
          description: "State Description"
        },
      ]);

  const createProject = (project) => {
    return (
      <Card key={project.id}>
               
      <Card.Body className="">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          Blurb
        </Card.Text>
        <Row>
          <Col xs={4}>
            <ListGroup>
              <ListGroup.Item>Date</ListGroup.Item>
              <ListGroup.Item>Role</ListGroup.Item>
            </ListGroup>
            <div className="text-center">
              <Button href={project.link} target="_blank" className="projectButton" variant="primary">Project Link</Button>
            </div>
          </Col>
          
          <Col>
          {project.description}
          </Col>
        </Row>
        
      </Card.Body>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>

    )
  }


    return (
        <Row id="projects">
          

            {projects.map(project => {
              return createProject(project);
            })}

           
        </Row>
    );
  }
  
export default MyProjects;