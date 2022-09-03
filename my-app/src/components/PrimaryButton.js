import Button from 'react-bootstrap/Button';

function PrimaryButton({ btnPlaceholder }) {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      color: white;
      border-radius:100px;
      background: linear-gradient(140deg, rgba(236,22,81,1) 20%, rgba(132,236,239,1) 100%);
      text-transform: uppercase;
    }

    .btn-xxl {
      padding: 0.625rem 1.6rem;
      font-size: 1rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        {btnPlaceholder}
      </Button>
    </>
  );
}

export default PrimaryButton;
