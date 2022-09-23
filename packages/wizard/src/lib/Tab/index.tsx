import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import { Container, TextContainer } from './styles';
import { TabProps } from '../types';

const Tab = (props: TabProps) => {
  const { step, isComplete, showCompleted, TabOverride } = props;

  const { title, subtitle, disabled } = step;

  const tabOverrideProps = {...props}
  delete tabOverrideProps.TabOverride;

  const disabledTextColor = disabled ? 'gray'  : ''

  if (TabOverride) {
    return <TabOverride {...tabOverrideProps} />
  }

  return <Container disabled={disabled}>
  <TextContainer>
    <Typography variant="body1" color={disabledTextColor}>
      {title && title}
    </Typography>
    <Typography
      variant="subtitle2"
      color={disabledTextColor}
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


};

export default Tab;
