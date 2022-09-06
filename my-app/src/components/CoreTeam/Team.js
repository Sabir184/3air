import React from 'react';
import './Team.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from '../MembersProfile/Member';
import { motion } from 'framer-motion';

function Team() {
  return (
    <>
      <Container className="team" id="team">
        <h2>Core Team</h2>
      </Container>
      <Container
        as={motion.div}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          staggerChildren: 0.5,
        }}
      >
        <Row>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/sandi.svg'}
              ProfileLink={'https://www.linkedin.com/in/sandi-bitenc-40228686/'}
              MemberName={'Sandi Bitenc'}
              MemberDescription={'Chief Executive Officer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/davor.svg'}
              ProfileLink={
                'https://www.linkedin.com/in/davor-%C5%BEic-43889419/'
              }
              MemberName={'Davor Žic'}
              MemberDescription={'Chief Technology Officer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/nejc.svg'}
              ProfileLink={'https://www.linkedin.com/in/nejcbukovec/'}
              MemberName={'Nejc Bukovec'}
              MemberDescription={'Chief Token Relations Officer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/rok.svg'}
              ProfileLink={
                'https://www.linkedin.com/in/rok-mihailovi%C4%87-krpan-2a12a114b/'
              }
              MemberName={'Rok Mihailović Krpan'}
              MemberDescription={'Chief Technology Officer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/domen.svg'}
              ProfileLink={'https://www.linkedin.com/in/dle%C5%A1/'}
              MemberName={'Domen Leš'}
              MemberDescription={'Lead Developer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/samo.svg'}
              ProfileLink={'https://www.linkedin.com/in/samozorger/'}
              MemberName={'Samo Zorger'}
              MemberDescription={'Operations Associate'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/laura.svg'}
              ProfileLink={
                'https://www.linkedin.com/in/laura-p-sterle-7a7397211/'
              }
              MemberName={'Laura P. Sterle'}
              MemberDescription={'Lead Graphic Designer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/ruba.svg'}
              ProfileLink={'https://www.linkedin.com/in/ruba-aramouny/'}
              MemberName={'Ruba Aramouny'}
              MemberDescription={'Chief Marketing Officer'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/anita.svg'}
              ProfileLink={'https://www.linkedin.com/in/anita-mlakar/'}
              MemberName={'Anita Mlakar'}
              MemberDescription={'PR'}
            />
          </Col>
          <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
            <Member
              ProfileImage={'./assets/solome.svg'}
              ProfileLink={
                'https://www.linkedin.com/in/solome-daniel-3b9597177'
              }
              MemberName={'Solome Daniel'}
              MemberDescription={'Ethiopia Operations Coordinator'}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;
