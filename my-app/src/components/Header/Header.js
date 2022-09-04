import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.scss';
import { useEffect, useState } from 'react';

export default function Header() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 20) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', setFixed);

  return (
    <Navbar
      className={fix ? 'headerWrapperFixed' : 'headerWrapper'}
      expand="lg"
    >
      <Container className="header">
        <Navbar.Brand href="#">
          {fix ? (
            <Image src="/assets/airLogoWhite.svg" height={"48px"} width={"114px"} />
          ) : (
            <Image src="/assets/Logo.svg" height={"48px"} width={"114px"} />
          )}
        </Navbar.Brand>
        <div className="nav-items">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>

              <Nav.Link href="https://blog.3air.io/" target={'_blank'}>
                Blog
              </Nav.Link>
              <Nav.Link
                href="https://docs.3air.io/tokenomics/3air-tokenomics/"
                target={'_blank'}
              >
                Tokenomics
              </Nav.Link>
              <Nav.Link href="#app">App</Nav.Link>

              <Nav.Link href="#staking">Staking</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
