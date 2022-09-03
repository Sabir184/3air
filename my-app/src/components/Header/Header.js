import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

// import Logo from './Logo';


function Header() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container className='header'>
        <Navbar.Brand href="#home">
        {/* <Logo
          LogoImage={'assets/Logo.svg'}
        /> */}
        <Image src='/assets/Logo.svg' height={48} width={114}/>
        </Navbar.Brand>
        <div className="nav-items">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className='menu-link'>Home</Nav.Link>
            <Nav.Link href="#team" className='menu-link'>Team</Nav.Link>
            <Nav.Link href="#blog" className='menu-link'>Blog</Nav.Link>
            <Nav.Link href="#tokenomics" className='menu-link'>Tokenomics</Nav.Link>
            <Nav.Link href="#app" className='menu-link'>App</Nav.Link>
            <Nav.Link href="#staking" className='menu-link'>Staking</Nav.Link>
            <Nav.Link href="#contact" className='menu-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;