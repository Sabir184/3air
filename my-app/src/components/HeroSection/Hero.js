import React from 'react';
import './Hero.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
    return (
        <>
            <Container className='hero'>
                <Row>
                    <Col xl={8} lg={8} md={6} sm={12} xsm={12} >
                        <div className='connectivity'>
                            <h1>
                                Connectivity <br />
                                <span>
                                    and Banking <br />
                                </span>
                                <span className='billion'>
                                    for the Next Billion
                                </span>
                            </h1>
                        </div>
                        <div className='limitless'>
                            <h2>
                                Limitless Potential
                            </h2>
                            <p>
                                The world's first blockchain platform that enables individuals and businesses to thrive on Web3 by providing broadband internet connectivity.
                                <br /><br />
                                3 billion people cannot access blockchain services because they are not connected to the internet.
                                We use proprietary technology to build broadband infrastructure where others have failed.

                            </p>
                        </div>
                        
                    </Col>
                    <Col lg={4} md={4} sm={12} xsm={12}>
                        2 of 2
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Hero;