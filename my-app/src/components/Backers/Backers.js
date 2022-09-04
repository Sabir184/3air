import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Backers() {
    return (
        <>
            <Container>
                <h2 style={{ color:"#EC1651", fontWeight: 800, fontSize: "38px", lineHeight: "53px", marginTop:"80px", marginBottom:"30px", }}>
                Backers
                </h2>
                <Row>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/cv.svg' alt='Backers' />
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <img src='/assets/co.png' alt='Backers' />
                    </Col>
                    <Col xl={3} lg={2} md={4} sm={6} style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <img src='/assets/acacia.png' alt='Backers' width={"60%"}/>
                    </Col>
                    <Col xl={3} lg={3} md={4} sm={6} style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <img src='/assets/capital.svg' alt='Backers' width={"55%"}/>
                    </Col>
                    <Col xl={1} lg={3} md={4} sm={6} style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <img src='/assets/helion.png' alt='Backers' />
                    </Col>
                    <Col xl={1} lg={1} md={4} sm={6}>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Backers;