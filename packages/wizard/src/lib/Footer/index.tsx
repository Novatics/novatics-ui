import Button from '@mui/material/Button';

import { Container } from './styles';
import { FooterProps } from '../types';

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
  step,
}: FooterProps) => {
  const { components, ...others } = step;

  if (components?.Footer) {
    return components.Footer({
      step: others,
      isFirst,
      isLast,
      handleBack,
      handleNext,
      handleFinish,
    });
  }

  if (ComponentOverride) {
    return (
      <ComponentOverride
        isFirst={isFirst}
        isLast={isLast}
        handleBack={handleBack}
        handleNext={handleNext}
        handleFinish={handleFinish}
        step={step}
      />
    );
  }

  return (
    <Container>
      {!isFirst && (
        <Button variant="outlined" onClick={handleBack}>
          {backText}
        </Button>
      )}

      {!isLast ? (
        <Button variant="contained" onClick={handleNext}>
          {nextText}
        </Button>
      ) : (
        <Button variant="contained" onClick={handleFinish}>
          {finishText}
        </Button>
      )}
    </Container>
  );
};

export default Footer;
