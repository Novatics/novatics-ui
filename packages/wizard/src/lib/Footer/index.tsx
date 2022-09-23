import React from 'react';
import Button from '@mui/material/Button';
import { BoxContainer } from './styles';
import {FooterProps} from '../types'

const Footer = ({
  handleBack,
  handleNext,
  handleFinish,
  backText = 'Back',
  nextText = 'Next',
  finishText = 'Finish',
  isFirst = false,
  isLast = false,
  ComponentOverride,
}: FooterProps) => {
  if (ComponentOverride) {
    return (
      <ComponentOverride
        isFirst={isFirst}
        isLast={isLast}
        handleBack={handleBack}
        handleNext={handleNext}
        handleFinish={handleFinish}
      />
    );
  }

  return (
    <BoxContainer>
      {!isFirst && (
        <Button variant="outlined" onClick={handleBack} className="backButton">
          {backText}
        </Button>
      )}
      {!isLast ? (
        <Button variant="contained" onClick={handleNext} className="nextButton">
          {nextText}
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleFinish}
          className="nextButton"
        >
          {finishText}
        </Button>
      )}
    </BoxContainer>
  );
};

export default Footer;
