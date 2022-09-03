import React from 'react';
import SubHeader from '../Subheader/SubHeader';
import FrictionlessCard from './FrictionlessCard';
import './FrictionlessExperienceStyle.scss';
import Stats from './Stats';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FrictionlessExperience() {
  return (
    <>
      <div className="HeaderFirstLine">A frictionless experience into</div>
      <div className="HeaderSecondLine">Web3, accessible to all</div>
      <SubHeader
        subHeaderText={'Connectivity & Entertainment'}
        firstText={'Broadband high-speed Internet, TV and IP Telephony'}
        secondText={
          '3air uses innovative, proprietary technology to provide broadband high-speed internet wirelessly through the air.'
        }
      />
      <div className="CardContainer">
        <FrictionlessCard
          CardImage={'assets/hammerIcon.svg'}
          CardText={'No need to dig trenches'}
        />
        <FrictionlessCard
          CardImage={'assets/tvIcon.svg'}
          CardText={'Digital TV at home and in the app'}
        />
        <FrictionlessCard
          CardImage={'assets/ipTelephoneIcon.svg'}
          CardText={'IP Telephony to facilitate businesses'}
        />
        <FrictionlessCard
          CardImage={'assets/badgeIcon.svg'}
          CardText={'Stable, reliable and affordable'}
        />
      </div>

      <Container className="statsContainer">
        <div className="statsStyle">
          <Col>
            <Row>
              <Stats StatNum={'1,000+'} StatText={'Mbps/user'} />
            </Row>
            <Col>
              <Stats StatNum={'50km'} StatText={'base station range'} />
            </Col>
          </Col>

          <Col>
            <Row>
              <Stats StatNum={'15,000'} StatText={'users/base station'} />
            </Row>
            <Col>
              {' '}
              <Stats
                StatNum={'17,000 Mbps'}
                StatText={'base station (x240 faster than mobile)'}
              />{' '}
            </Col>
          </Col>
        </div>
        <Row>
          <Col>
            <img width={480} src="assets/diagram2.svg" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FrictionlessExperience;
