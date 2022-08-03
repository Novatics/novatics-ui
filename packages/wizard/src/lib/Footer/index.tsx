import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
  backText?: string;
  nextText?: string;
  isFirst: boolean,
  isLast: boolean,
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      {!isFirst && <Button variant="outlined" onClick={handleBack}>
                    {backText}
                  </Button>
      }
      {!isLast && <Button variant="contained" onClick={handleNext}>
                  {nextText}
                  </Button>}
    </Box>
  );
};

export default Footer;
