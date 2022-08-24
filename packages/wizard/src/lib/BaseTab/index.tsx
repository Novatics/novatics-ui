import React from 'react';
import Tab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';

interface Step {
  label: string;
  content: React.ReactNode | string;
}

interface ITabProps {
  step: Step;
  index: number;
  stepsStatus: number;
  showCompleted: boolean;
}

const BaseTab = ({ step, index, stepsStatus, showCompleted }: ITabProps) => {
  return (
    <>
      <Tab label={step.label} />
      {stepsStatus[index].status === 'complete' && showCompleted && (
        <CheckIcon
          style={{ marginLeft: 'auto', marginRight: '10px' }}
          fontSize="small"
          color="success"
        />
      )}
    </>
  );
};

export default BaseTab;
