import React from 'react';
import Button from '@mui/material/Button';
import { BoxContainer } from './styles';

interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
  backText?: string;
  nextText?: string;
  isFirst: boolean;
  isLast: boolean;
}

const Footer = ({
  handleBack,
  handleNext,
  backText = 'Back',
  nextText = 'Next',
  isFirst = false,
  isLast = false,
}: FooterProps) => {
  return (
    <BoxContainer>
      {!isFirst && (
        <Button variant="outlined" onClick={handleBack} className="backButton">
          {backText}
        </Button>
      )}
      {!isLast && (
        <Button variant="contained" onClick={handleNext} className="nextButton">
          {nextText}
        </Button>
      )}
    </BoxContainer>
  );
};

export default Footer;
