import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from './Tab';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import TabPanel from './TabPanel';
import {
  Step,
  HeaderBaseProps,
  FooterBaseProps,
  ContentBaseProps,
  TabBaseProps,
} from './types';
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
  TabOverride: React.FC<TabBaseProps>;
  HeaderOverride: React.FC<HeaderBaseProps>;
  ContentOverride: React.FC<ContentBaseProps>;
  FooterOverride: React.FC<FooterBaseProps>;
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
    const isDisabled = steps[newStep] ? steps[newStep].disabled : false;
    if (isDisabled) return;
    if (isLinear && !isNextStep) return;
    setCurrentStep(newStep);
    updateStepStatus();
  };

  const handleFinish = () => {
    onFinish && onFinish();
  };

  const handleNext = () => {
    const isLastStep = currentStep >= steps.length - 1;

    onNext && onNext(currentStep);
    if (isLastStep) return;

    handleChange(currentStep + 1);
  };

  const handleBack = () => {
    const isFirstStep = currentStep === 0;

    onBack && onBack(currentStep);
    if (isFirstStep) return;

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
              step={step}
              ComponentOverride={ContentOverride}
            />

            <Footer
              isFirst={index === 0}
              isLast={index + 1 === steps.length}
              step={step}
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
