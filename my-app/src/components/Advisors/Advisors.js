import React from 'react';
import './Advisors.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from '../MembersProfile/Member';

function Advisors() {
    return (
        <div>
            <Container className='advisors'>
                <h2>Advisors</h2>
            </Container>
            <Container>
                <Row>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="advisors-members">
                        <Member
                            ProfileImage={'/assets/babs.svg'}
                            ProfileLink={'https://www.linkedin.com/in/emmexdee/?originalSubdomain=ng'}
                            MemberName={'Emmanuel Babs'}
                            MemberDescription={'Binance Africa & Bundle'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/gideon.svg'}
                            ProfileLink={'https://za.linkedin.com/in/gideon-greaves-97535348'}
                            MemberName={'Gideon Greaves'}
                            MemberDescription={'MD at CV Labs Africa'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/denis.svg'}
                            ProfileLink={'https://www.linkedin.com/in/denis-bolcina-232203b5/'}
                            MemberName={'Denis Bolčina'}
                            MemberDescription={'Telecom advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/markus.svg'}
                            ProfileLink={'https://www.linkedin.com/in/eweket/'}
                            MemberName={'Markos Lemma'}
                            MemberDescription={'Africa focused Strategic Advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/von.svg'}
                            ProfileLink={'https://www.linkedin.com/in/oliver-von-wolff-63146639/'}
                            MemberName={'Oliver von Wolff'}
                            MemberDescription={'Strategy and Financial Advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/key.svg'}
                            ProfileLink={'https://in.linkedin.com/in/mrkey'}
                            MemberName={'KEY'}
                            MemberDescription={'Blockchain & Strategy Advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/james.svg'}
                            ProfileLink={'https://www.linkedin.com/in/jamesdbernard/'}
                            MemberName={'James Bernard'}
                            MemberDescription={'Blockchain Advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/julius.svg'}
                            ProfileLink={'https://www.linkedin.com/in/julius-gloeckner-mba-cpacia-cfe-a061a31b/'}
                            MemberName={'Julius Glöckner'}
                            MemberDescription={'Strategy and financial advisor'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/dustin.svg'}
                            ProfileLink={'https://www.linkedin.com/in/plantholt'}
                            MemberName={'Dustin Plantholt'}
                            MemberDescription={'Plantholt Advisory Group'}
                        />
                    </Col>
                    <Col xlg={3} lg={3} md={4} sm={12} xsm={12} className="team-members">
                        <Member
                            ProfileImage={'/assets/michael.svg'}
                            ProfileLink={'https://uk.linkedin.com/in/michal-domarecki'}
                            MemberName={'Michał Domarecki'}
                            MemberDescription={'Co-CEO Synapse Network'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Advisors;