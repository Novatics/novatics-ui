import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from './Tab';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import TabPanel from './TabPanel';
import { Step, HeaderOverrideProps, FooterOverrideProps, ContentOverrideProps, TabOverrideProps } from './types';
import { TabContainer } from './styles';
import Content from './Content/indes';

function setAccessibilityProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
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
  TabOverride: React.FC<TabOverrideProps>;
  HeaderOverride: React.FC<HeaderOverrideProps>;
  ContentOverride: React.FC<ContentOverrideProps>;
  FooterOverride: React.FC<FooterOverrideProps>;
  steps: Step[];
}

const Wizard = ({
  onBack,
  onNext,
  onFinish,
  isLinear = false,
  showCompleted = false,
  TabOverride,
  HeaderOverride,
  ContentOverride,
  FooterOverride,
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
    const isDisabled = steps[newStep].disabled;
    if (isDisabled) return;
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
          return (
            <TabContainer
              key={step.title}
              onClick={() => handleChange(index)}
              {...setAccessibilityProps(index)}
            >
              <Tab
                step={step}
                isComplete={isComplete}
                showCompleted={showCompleted}
                TabOverride={TabOverride}
              />
            </TabContainer>
          );
        })}
      </Tabs>

      <Box sx={{ width: '80%' }}>
        {steps.map((step, index) => (
          <TabPanel key={step.title} value={currentStep} index={index}>
            <Header step={step} ComponentOverride={HeaderOverride} />

            <Content
              content={step.content}
              ComponentOverride={ContentOverride}
            />

            <Footer
              isFirst={index === 0}
              isLast={index + 1 === steps.length}
              handleBack={handleBack}
              handleNext={handleNext}
              handleFinish={handleFinish}
              ComponentOverride={FooterOverride}
            />
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Wizard;
