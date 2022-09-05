import React from 'react';
import './StatsStyle.scss';
import Container from 'react-bootstrap/Container';

function Stats({ StatNum, StatText }) {
  return (
    <Container className="numTextContainer">
      <div className="statNum">{StatNum}</div>
      <div className="statText">{StatText}</div>
    </Container>
  );
}

export default Stats;
