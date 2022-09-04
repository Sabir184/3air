import React from 'react';
import './EdicationStyles.scss';
import Container from 'react-bootstrap/esm/Container';
import SubHeader from '../Subheader/SubHeader';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import Image from 'react-bootstrap/Image';

function Edication() {
  return (
    <>
      <Container className="fluid EdicationContainer">
        <SubHeader
          subHeaderText={'Edication & Empowerment'}
          firstText={'Learn about blockchain with learn-to-earn incentives'}
          secondText={
            '3air is the bridge between the physical world and Web3. Our on-ground teams provide education to users with Learn to Earn incentives:'
          }
        />
        <Container className="EdicationBottom">
          <div className="EdicationLeftSide">
            <FrictionlessCard
              CardImage={'assets/newUserIcon.svg'}
              CardText={'Staked tokens for each new user'}
            />
            <FrictionlessCard
              CardImage={'assets/bagIcon.svg'}
              CardText={'Student sponsoring and job creation'}
            />
            <FrictionlessCard
              CardImage={'assets/giftIcon.svg'}
              CardText={'Tokenized rewards system for grades'}
            />
          </div>
          <div className="EdicationImageWrapper">
            <Image src="/assets/EdicationIllustration.svg" />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Edication;
