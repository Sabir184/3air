import React from 'react';
import './DigitalStyles.scss';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function DigitalCard({ CardImage, CardText }) {
  return (
    <>
      <Container>
        <Card className="digitalCardContainer" border="0">
          <div>
          <Card.Img
            variant="top"
            src={CardImage}
            width={"108px"}
            height={"96px"}
          />
          </div>
          <Card.Body>
            <Card.Text>
              {CardText}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default DigitalCard;
