import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import { Container, TextContainer } from './styles';
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

const Tab = (props: TabProps) => {
  const { step, isComplete, showCompleted, TabComponent } = props;
  const hasTabComponent = !!TabComponent;

  return hasTabComponent ? (
    <TabComponent {...props} />
  ) : (
    <Container>
      <TextContainer>
        <Typography variant="body1">{step.label && step.label}</Typography>
        <Typography variant="subtitle2" sx={{ whiteSpace: 'pre-wrap' }}>
          {step.subtitle && step.subtitle}
        </Typography>
      </TextContainer>
      {isComplete && showCompleted && (
        <CheckIcon
          style={{ marginLeft: '20px', marginRight: '10px' }}
          fontSize="small"
          color="success"
        />
      )}
    </Container>
  );
};

export default Tab;
