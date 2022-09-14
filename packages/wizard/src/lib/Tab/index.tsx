import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import { Container, TextContainer } from './styles';
import { Step } from '../wizard';

interface TabProps {
  step: Step;
  isComplete: boolean;
  disabled: boolean;
  showCompleted: boolean;
  TabComponent: React.ReactNode;
}

const Tab = (props: TabProps) => {
  const { step, isComplete, showCompleted, TabComponent } = props;

  const { title, subtitle, disabled } = step;

  return TabComponent ? (
    <TabComponent {...props} />
  ) : (
    <Container disabled={disabled}>
      <TextContainer>
        <Typography variant="body1" color={disabled && 'gray'}>
          {title && title}
        </Typography>
        <Typography
          variant="subtitle2"
          color={disabled && 'gray'}
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {subtitle && subtitle}
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
