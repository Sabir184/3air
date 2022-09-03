import React from 'react';
import './LogosSection.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LogosSection() {
    return (
        <>
            <Container className='logos-sec'>
                <h2 className='feature'>
                    Featured in
                </h2>
                <Row>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/cointelegraph.svg' alt='company-logo' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/bitcoin.png' alt='company-logo' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/investing.svg' alt='company-logo' />
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={6}>
                        <img src='/assets/bitcoinist.svg' alt='company-logo' />
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={5}>
                        <img src='/assets/cp.svg' alt='company-logo' />
                    </Col>
                    <Col xl={1} lg={1} md={3} sm={4}>
                        <img src='/assets/yahoo.svg' alt='company-logo' />
                    </Col>
                    <Col xl={1} lg={1} md={3} sm={3} className="amb">
                        <img src='/assets/amb.png' alt='company-logo' />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LogosSection;