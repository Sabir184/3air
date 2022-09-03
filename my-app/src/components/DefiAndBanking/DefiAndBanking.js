import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import SubHeader from '../Subheader/SubHeader';
import './DefiAndBankingStyles.scss';

function DefiAndBanking() {
  return (
    <>
      <Container className="fluid">
        <SubHeader
          subHeaderText={'DeFi & Banking'}
          firstText={
            'Banking the unbanked - Old promise, new approach (that works!)'
          }
          secondText={
            'Use crypto, credit cards, bank transfers or cash to access decentralized lending, borrowing, yield farming, and more.'
          }
        />
      </Container>

      <div className=" BottomSectionContainer">
        <Container className="cardIconsContainer">
          <FrictionlessCard
            CardText={'Staking & farming'}
            CardImage={'assets/moneyIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Safer lending'}
            CardImage={'assets/handIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Bandwidth sharing'}
            CardImage={'assets/bandIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Vast ecosystem growth opportunities'}
            CardImage={'assets/ecoIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Play and earn and Learn and earn apps'}
            CardImage={'assets/gameIcon.svg'}
          />
        </Container>
      </div>
    </>
  );
}

export default DefiAndBanking;
