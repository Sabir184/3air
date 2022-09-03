import React from 'react';
import SubHeader from '../Subheader/SubHeader';
import FrictionlessCard from './FrictionlessCard';
import './FrictionlessExperienceStyle.scss';

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
    </>
  );
}

export default FrictionlessExperience;
