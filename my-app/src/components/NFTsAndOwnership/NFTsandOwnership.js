import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import SubHeader from '../Subheader/SubHeader';
import './NFTsStyle.scss';

function NFTsandOwnership() {
  return (
    <>
      <Container className="fluid">
        <SubHeader
          subHeaderText={'NFTs & Ownership'}
          firstText={''}
          secondText={''}
        />
        <div className="nftContainer">
          <FrictionlessCard
            CardText={
              'Users buy, share, and resell internet services as an NFT'
            }
            CardImage={'assets/nftIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Affordable, decentralized mesh internet for everyone'}
            CardImage={'assets/chainIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Super fast and stable broadband for businesses'}
            CardImage={'assets/speedIcon.svg'}
          />
        </div>
      </Container>
    </>
  );
}

export default NFTsandOwnership;
