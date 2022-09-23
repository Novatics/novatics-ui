import React from 'react';
import Button from '@mui/material/Button';
import { BoxContainer } from './styles';

interface ComponentOverrideProps {
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
  backText?: string;
  nextText?: string;
  finishText?: string;
  isFirst: boolean;
  isLast: boolean;
}

export interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
  backText?: string;
  nextText?: string;
  finishText?: string;
  isFirst: boolean;
  isLast: boolean;
  ComponentOverride: React.FC<ComponentOverrideProps>;
}

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
