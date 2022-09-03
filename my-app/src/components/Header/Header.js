import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.scss';

function Header() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container className='header'>
        <Navbar.Brand href="#home">
        <Image src='/assets/Logo.svg' height={48} width={114}/>
        </Navbar.Brand>
        <div className="nav-items">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#app" >App</Nav.Link>
            <Nav.Link href="#staking">Staking</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;