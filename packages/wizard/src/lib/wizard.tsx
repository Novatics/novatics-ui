import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from './Tab';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import TabPanel from './TabPanel';

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

interface StepStatus {
  status: 'complete' | 'incomplete' | undefined;
}
export interface WizardProps {
  onBack?: (stepIndex: number) => void;
  onNext?: (stepIndex: number) => void;
  onFinish?: () => void;
  isLinear?: boolean;
  showCompleted?: boolean;
  TabComponent: React.ReactNode;
  steps: Step[];
}

const Wizard = ({
  onBack,
  onNext,
  onFinish,
  isLinear = false,
  showCompleted = false,
  TabComponent,
  steps,
}: WizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const initialStepsStatus: StepStatus[] = steps.map(() => ({
    status: 'incomplete',
  }));
  const [stepsStatus, setStepsStatus] = useState(initialStepsStatus);

  const updateStepStatus = () => {
    const updatedStepsStatus = stepsStatus;
    updatedStepsStatus[currentStep].status = 'complete';
    setStepsStatus(updatedStepsStatus);
  };

  const handleChange = (newStep: number) => {
    const isNextStep = newStep === currentStep + 1;

    if (isLinear && !isNextStep) return;
    setCurrentStep(newStep);
    updateStepStatus();
  };

  const handleFinish = () => {
    onFinish && onFinish();
    handleChange(currentStep + 1);
  };

  const handleNext = () => {
    onNext && onNext(currentStep);
    handleChange(currentStep + 1);
  };

  const handleBack = () => {
    onBack && onBack(currentStep);
    handleChange(currentStep - 1);
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
        value={currentStep}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {steps.map((step, index) => {

          const isComplete = stepsStatus[index].status === 'complete';
          return <TabContainer
            key={step.label}
            onClick={() => handleChange(index)}
            {...setAccessibilityProps(index)}
          >
           <Tab step={step}
                isComplete={isComplete}
                showCompleted={showCompleted}
                TabComponent={TabComponent}/>
          </TabContainer>
        })}
      </Tabs>

      <Box sx={{ width: '80%' }}>
        {steps.map((step, index) => (
          <TabPanel key={step.label} value={currentStep} index={index}>
            <Header step={index + 1} subtitle={step.label} />
            {step.content}
            <Footer
              isFirst={index === 0}
              isLast={index + 1 === steps.length}
              handleBack={handleBack}
              handleNext={handleNext}
              handleFinish={handleFinish}
            />
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Wizard;
