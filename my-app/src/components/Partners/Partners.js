import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Partners() {
    return (
        <>
            <Container>
                <h2 style={{ color:"#EC1651", fontWeight: 800, fontSize: "38px", lineHeight: "53px", marginTop:"80px", marginBottom:"30px", }}>
                Partners
                </h2>
                <Row>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/icea.svg' alt='Partners' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6} style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <img src='/assets/it.png' alt='Partners' width={"70%"}/>
                    </Col>
                    <Col xl={3} lg={3} md={4} sm={6}>
                        <img src='/assets/tele.png' alt='Partners' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/africa.png' alt='Partners' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/hero.png' alt='Partners' />
                    </Col>
                    <Col xl={1} lg={1} md={4} sm={6}>
                        <img src='/assets/skale.svg' alt='Partners' width={"100px"} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Partners;