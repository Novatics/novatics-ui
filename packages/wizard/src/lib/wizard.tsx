import ButtonMui, { ButtonProps } from '@mui/material/Button';
import {useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

const Wizard = (props: ButtonProps) => {
   
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
            <Stepper activeStep={activeStep} orientation="vertical" connector={<></>}>
            {steps.map((step, index) => (
            <Step key={step.label}>
                <div>{step.label}</div>
   
                <StepContent>
                    {step.description}
                <div>
                    <div>
                    <button
                        onClick={handleNext}
                    >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </button>
                    <button
                        disabled={index === 0}
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    </div>
                </div>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        )
} 


export default Wizard;
// export { Button };
// export * from '@mui/material/Button';
