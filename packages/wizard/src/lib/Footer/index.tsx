import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
  backText?: string;
  nextText?: string;
}

const Footer = ({
  handleBack,
  handleNext,
  backText = 'Back',
  nextText = 'Next',
}: FooterProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <Button variant="outlined" onClick={handleBack}>
        {backText}
      </Button>
      <Button variant="contained" onClick={handleNext}>
        {nextText}
      </Button>
    </Box>
  );
};

export default Footer;
