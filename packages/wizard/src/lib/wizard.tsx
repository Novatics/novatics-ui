import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import TabPanel from './TabPanel';
import CheckIcon from '@mui/icons-material/Check';
import { TabContainer } from './styles';

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

type StepStatus = 'complete' | 'incomplete' | undefined;
export interface WizardProps {
  onBack?: (stepIndex: number) => void;
  onNext?: (stepIndex: number) => void;
  isLinear?: boolean;
  showCompleted?: boolean;
  steps: Step[];
}

const Wizard = ({ onBack, onNext, isLinear = false, showCompleted = false, steps }: WizardProps) => {
  const [stepIndex, setStepIndex] = useState(0);

  const initialStepsStatus: StepStatus[] = steps.map(() => 'incomplete');
  const [stepsStatus, setStepsStatus] = useState(initialStepsStatus);

  const updateStepStatus = () => {
    const updatedStepsStatus = stepsStatus;
    updatedStepsStatus[stepIndex] = 'complete';
    setStepsStatus(updatedStepsStatus);
  }

  const handleChange = (event: React.SyntheticEvent, newStep: number) => {
    if(isLinear && newStep !== stepIndex + 1) return

    setStepIndex(newStep);
    updateStepStatus();
  };

  const handleNext = () => {
    onNext && onNext(stepIndex);
    handleChange(null, stepIndex + 1);
  };

  const handleBack = () => {
    onBack && onBack(stepIndex);
    handleChange(null, stepIndex - 1)
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
          <TabContainer
          onClick={() => handleChange(null, index)}
          {...setAccessibilityProps(index)}
          >
          <Tab
            key={step.label}
            label={step.label}
          />
          {stepsStatus[index] === "complete" && showCompleted && <CheckIcon style={{ marginLeft: 'auto', marginRight: '10px' }} fontSize="small" color="success" />}
          </TabContainer>
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
