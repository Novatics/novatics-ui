import React from 'react';
import BaseTab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';

interface Step {
  label: string;
  content: React.ReactNode | string;
}

interface TabProps {
  step: Step;
  isComplete: boolean;
  showCompleted: boolean;
  TabComponent: React.ReactNode;
}

const Tab = (props : TabProps) => {
  const { step, isComplete, showCompleted, TabComponent } = props;
  const hasTabComponent = !!TabComponent;

  return (

    hasTabComponent ? <TabComponent {...props} /> :
    <> <BaseTab label={step.label} />
          {isComplete && showCompleted && (
            <CheckIcon
              style={{ marginLeft: 'auto', marginRight: '10px' }}
              fontSize="small"
              color="success"
            />
          )}
    </>
  );
};

export default Tab;
