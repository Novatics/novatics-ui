import React from 'react';

interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
}

const Footer = ({ handleBack, handleNext }: FooterProps) => {
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Footer;
