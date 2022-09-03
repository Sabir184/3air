import React from 'react';
import Card from 'react-bootstrap/Card';
import './FrictionlessCard.scss';

function FrictionlessCard({ CardText, CardImage }) {
  return (
    <>
      <Card className="cardContainer" border="0">
        <Card.Img style={{ height: '3rem' }} variant="top" src={CardImage}/>
        <Card.Body>
          <Card.Text style={{ marginTop: '1rem' }}>{CardText}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default FrictionlessCard;
