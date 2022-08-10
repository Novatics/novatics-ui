import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import TabPanel from './TabPanel';


function setAccessibilityProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export interface Step {
  label: string;
  content: React.ReactNode | string;
}
export interface WizardProps {
  onBack?: (stepIndex: number) => void;
  onNext?: (stepIndex: number) => void;
  isLinear?: boolean;
  steps: Step[];
}

const Wizard = ({ onBack, onNext, isLinear = false, steps }: WizardProps) => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStepIndex(newValue);
  };

  const handleNext = () => {
    onNext && onNext(stepIndex);
    setStepIndex((prevValue) => prevValue + 1);
  };

  const handleBack = () => {
    onBack && onBack(stepIndex);
    setStepIndex((prevValue) => prevValue - 1);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        height: 'auto',
        width: 'auto',
      }}
    >
      <Tabs
        orientation="vertical"
        value={stepIndex}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {steps.map((step, index) => (
          <Tab
            key={step.label}
            label={step.label}
            {...setAccessibilityProps(index)}
          />
        ))}
      </Tabs>

      <Box sx={{ width: '80%' }}>
        {steps.map((step, index) => (
          <TabPanel key={step.label} value={stepIndex} index={index}>
            <Header step={index + 1} subtitle={step.label} />
            {step.content}
            <Footer
              isFirst={index === 0}
              isLast={index + 1 === steps.length}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Wizard;
