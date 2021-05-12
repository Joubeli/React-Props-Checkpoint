import Profile from './profile/profile.js'
import './style.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  const alertName = (myname) => {
    alert(`Hello I am ${myname}`);
  };
  let profile = [{
    Name: 'Imen Joubeli (Bou A li)',
    /* img:'https://holocaustmusic.ort.org/typo3conf/ext/ne_hm_t3template/Resources/Public/Images/loader.gif', */
    img:'https://static.wixstatic.com/media/7cfced_b653aba696ce4833a9b08d26f8ecfb19~mv2.gif',
    bio: `My name is Imen Joubeli and I am a full-stack Web
     Application Developer and Software Developer, currently living in Tunisia. 
     I have a Bachelor degree in Computer Science from the higher institute of 
     economical and commercial science of tunis, and a master degree in Data Science for Business.
     My primary focus and inspiration for my studies is Web Development`,
    profession: 'Full-Stack web developer',
  }]
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Academic profile</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Social Media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Profile profile={profile} alertName={alertName}>
        <p className='copyright'> © 2021 Copyright</p>
      </Profile>
    </>
  );
}



export default App;
