import logo from './logo.svg';
import './App.css';
import MyNavbar from './my-components/MyNavbar';
import MyWelcome from './my-components/MyWelcome.js';
import MyProjects from './my-components/MyProjects';
import MyAbout from './my-components/MyAbout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
      <Container fluid>
        <MyNavbar /> 
        <MyWelcome />
        <MyProjects />
        <MyAbout />
      </Container>

  );
}

export default App;
