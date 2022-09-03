import React from 'react';
import SubHeader from '../Subheader/SubHeader';
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
    </>
  );
}

export default FrictionlessExperience;
