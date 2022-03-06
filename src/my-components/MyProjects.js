
import { useState } from 'react';
import { ListGroup, Container, Navbar, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';

function MyProjects() {

  const [projects, setProjects] = useState([
        
        { 
          id: "Jokinator9000",
          date: "March 2022",
          title: "Jokinator9000",
          link: "https://alexraschid.github.io/FCC-RandomQuoteMachine/",
          description: `A quick app made to get a laugh. With more time, I would try to better filter the jokes. This is supposed to print out IT based jokes. Right now its possible distasteful, nsfw, or non-pc to be thrown into the mix based on the API call. I had tried to filter it out with modifiers on the URL from where i got the key, but they dont seem to do anything.`
        },
        { 
          id: "WordScript",
          date: "April 2017",
          title: "wordScript",
          link: "https://rawgit.com/andreGarvin/wordScript/master/index.html",
          description: "This Project is to help people that don't know how to code or have trouble understanding code to make coding easiler by using keywords to start code. We built this project by using HTML,CSS and javascript. The challenges we ran into is how to get the display to look like real programming sites with the numbers and in the javascript we had some problems with names and code, it was everywhere so it was hard to reorganized it We learned a lot with a text editor libary called ACE and we learned how to create keywords in the program and transform the keywords into javascript What's next with this project is to incorporate more software languages with text editors and add in a better system so people are able to understand how code work more easily"
        },
        { 
          id: "AOTS",
          date: "Dec 2016",
          title: "Attack of the Surfboards",
          link: "https://alexraschid.github.io/attack_of_the_surfboards/",
          description: "Unity 5 Project made during the ScriptEd DevShop Summer 2016 hackathon"
        },
      ]);

  const createProject = (project) => {
    let uniqueKey = "project"+project.id;
    let image = `https://aerportfoliobucket.s3.amazonaws.com/${uniqueKey}.jpg`
    
    return (
      <Card key={uniqueKey} id={"project"+project.id} className="project-tile">
               
      <Card.Body>
        <Card.Title className="text-center">{project.title}</Card.Title>
        <Row>

          <Col xs={4}>
            <Row>
              <p className="text-center">{project.date}</p>
            </Row>
            <div className="text-center align-self-center align-middle">
              <Button href={project.link} target="_blank" className="projectButton " variant="primary">Project Link</Button>
            </div>
          </Col>
          
          <Col className="text-left">
          {project.description}
          </Col>
          
        </Row>
        
      </Card.Body>
      <Card.Img className="" variant="top" src={image} alt="image here" />
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