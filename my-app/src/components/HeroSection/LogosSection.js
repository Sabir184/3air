import React from 'react';
import './LogosSection.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LogosSection() {
  return (
    <>
      <Container className="logos-sec">
        <h2 className="feature">Featured in</h2>
        <Container className="featuredContainer">
          <img height={28} src="/assets/cointelegraph.svg" alt="company-logo" />

          <img height={28} src="/assets/bitcoin.png" alt="company-logo" />

          <img height={28} src="/assets/investing.svg" alt="company-logo" />

          <img height={28} src="/assets/bitcoinist.svg" alt="company-logo" />

          <img height={28} src="/assets/cp.svg" alt="company-logo" />

          <img height={28} src="/assets/yahoo.svg" alt="company-logo" />

          <img height={28} src="/assets/amb.png" alt="company-logo" />
        </Container>
      </Container>
    </>
  );
}

export default LogosSection;
