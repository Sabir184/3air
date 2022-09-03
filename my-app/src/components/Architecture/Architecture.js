import React from 'react';
import './ArchitectureStyle.scss';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

function Architecture() {
  return (
    <>
      <Container className="archContainer">
        <h2>Architecture</h2>
      </Container>

      <div className="imageWrapper">
        <Image src="/assets/architectureImg.png" />
      </div>
    </>
  );
}

export default Architecture;
