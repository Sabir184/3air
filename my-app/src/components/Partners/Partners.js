import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PartnersStyles.scss';

function Partners() {
  return (
    <>
      <Container>
        <h2
          style={{
            color: '#EC1651',
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: '53px',
            marginTop: '80px',
            marginBottom: '30px',
          }}
        >
          Partners
        </h2>
        {/* <Row>
          <Col xl={2} lg={2} md={4} sm={6}>
            <img src="/assets/icea.svg" alt="Partners" />
          </Col>
          <Col
            xl={2}
            lg={2}
            md={4}
            sm={6}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img src="/assets/it.png" alt="Partners" width={'70%'} />
          </Col>
          <Col xl={2} lg={3} md={4} sm={6}>
            <img src="/assets/tele.png" alt="Partners" />
          </Col>
          <Col xl={2} lg={2} md={4} sm={6}>
            <img src="/assets/africa.png" alt="Partners" />
          </Col>
          <Col xl={2} lg={2} md={4} sm={6}>
            <img src="/assets/hero.png" alt="Partners" />
          </Col>
          <Col xl={2} lg={1} md={4} sm={6}>
            <img src="/assets/skale.svg" alt="Partners" width={'100px'} />
          </Col>
        </Row>

        */}

        <Container className="logosContainer">
          <img height={36} src="/assets/icea.svg" alt="Partners" />

          <img height={24} src="/assets/it.png" alt="Partners" />

          <img height={36} src="/assets/tele.png" alt="Partners" />

          <img height={44} src="/assets/africa.png" alt="Partners" />

          <img height={38} src="/assets/hero.png" alt="Partners" />

          <img height={32} src="/assets/skale.svg" alt="Partners" />
        </Container>
      </Container>
    </>
  );
}

export default Partners;
