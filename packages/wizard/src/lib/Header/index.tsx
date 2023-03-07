import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { HeaderProps } from '../types';

const Header = ({ step, ComponentOverride }: HeaderProps) => {
  const { components, ...others } = step;

  if (components?.Header) {
    return components.Header({ step: others });
  }

  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return (
    <Box>
      <Typography variant="h6">{step.title}</Typography>
      <Typography variant="subtitle2">{step.subtitle}</Typography>
    </Box>
  );
};

export default Header;
