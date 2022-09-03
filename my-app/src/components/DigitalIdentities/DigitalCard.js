import React from 'react';
import './DigitalStyles.scss';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function DigitalCard({ CardImage, CardText }) {
  return (
    <>
      <Container>
        <Card className="digitalCardContainer" border="0">
          <Card.Img
            style={{ height: '4rem', width: 'rem' }}
            variant="top"
            src={CardImage}
          />
          <Card.Body>
            <Card.Text style={{ fontSize: '2vmin', marginTop: '10px' }}>
              {CardText}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default DigitalCard;
