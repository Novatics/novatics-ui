import { Typography } from '@mui/material';
import { HeaderProps } from '../types';
import { Container } from './styles';

const Header = ({ step, ComponentOverride }: HeaderProps) => {
  const { components, ...others } = step;

  if (components?.Header) {
    return components.Header({ step: others });
  }

  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return (
    <Container>
      <Typography variant="h6">{step.title}</Typography>
      <Typography variant="subtitle2">{step.subtitle}</Typography>
    </Container>
  );
};

export default Header;
