import React from 'react';
import './SubscriptionStyles.scss';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Subscription() {
  return (
    <>
      <Container>
        <div className="topHrLine" />

        <div className="subContainer">
          <h1>Register now to stay up-to-date!</h1>
          <InputGroup>
            <Form.Control
              placeholder="Email"
              aria-label="Recipient's email"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              SUBSCRIBE
            </Button>
          </InputGroup>
        </div>
      </Container>
    </>
  );
}

export default Subscription;
