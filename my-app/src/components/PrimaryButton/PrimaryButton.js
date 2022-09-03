import React from 'react';
import Button from 'react-bootstrap/Button';
import './PrimaryButton.scss';

function PrimaryButton({ btnPlaceholder }) {
  return (
    <>
      <Button variant="flat" size="xxl">
        {btnPlaceholder}
      </Button>
    </>
  );
}

export default PrimaryButton;
