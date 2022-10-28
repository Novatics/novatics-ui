import { Typography, styled } from '@mui/material';
import { colors } from '@novatics-ui/tokens';

/* eslint-disable-next-line */
export interface CoreProps {}

const StyledCore = styled('div')({
  color: colors['nebula--medium'],
});

export function Core(props: CoreProps) {
  return (
    <StyledCore>
      <Typography variant="h1">Our core component!</Typography>
    </StyledCore>
  );
}

export default Core;
