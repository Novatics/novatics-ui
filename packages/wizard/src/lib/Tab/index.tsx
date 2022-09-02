import React from 'react';
import BaseTab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface Step {
  label: string;
  subtitle?: string;
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
        <Button variant="text" sx={{maxWidth: '350px'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', maxWidth: '350px'}} >
              <Typography variant="body1">{step.label && step.label}</Typography>
              <Typography variant="subtitle2">{step.subtitle && step.subtitle}</Typography>
            </Box>
            {isComplete && showCompleted && (
            <CheckIcon
              style={{ marginLeft: 'auto', marginRight: '10px' }}
              fontSize="small"
              color="success"
            />
          )}
        </Button>
  );
};

export default Tab;
