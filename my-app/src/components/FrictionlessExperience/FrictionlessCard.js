import React from 'react';
import Card from 'react-bootstrap/Card';

function FrictionlessCard({ CardText, CardImage }) {
  return (
    <>
      <Card
        border="0"
        style={{ width: '100%', textAlign: 'center', margin: '40px' }}
      >
        <Card.Img style={{ height: '3rem' }} variant="top" src={CardImage} />
        <Card.Body>
          <Card.Text style={{ marginTop: '1rem' }}>{CardText}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default FrictionlessCard;
