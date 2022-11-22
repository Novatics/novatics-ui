import Box from '@mui/material/Box';
import { ContentProps } from '../types';

const Content = ({ step, ComponentOverride }: ContentProps) => {
  const { components, ...others } = step;

  if (components?.Content) {
    return components.Content({ step: others });
  }

  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return <Box sx={{ mt: '20px' }}>{step.content}</Box>;
};

export default Content;
