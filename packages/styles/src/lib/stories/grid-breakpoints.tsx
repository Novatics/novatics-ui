/* eslint-disable @nx/enforce-module-boundaries */
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { colors } from '@novatics-ui/tokens';

import { styled } from '../styled';

const StyledBox = styled(Box)(() => ({
  border: '2px solid',
  borderColor: colors['penumbra'],
  padding: '10px',
  borderRadius: '4px',
  textAlign: 'center',
  fontWeight: 'bold',
}));

export const GridBreakpoints = () => {
  return (
    <Grid container>
      <Grid item xxs={4} xs={6} sm={1} md={5} lg={2} xl={4} xxl={1}>
        <StyledBox sx={{ backgroundColor: 'tertiary.light' }}>1</StyledBox>
      </Grid>
      <Grid item xxs={8} xs={6} sm={11} md={7} lg={10} xl={8} xxl={11}>
        <StyledBox sx={{ backgroundColor: 'secondary.light' }}>2</StyledBox>
      </Grid>
      <Grid item xxs={8} xs={6} sm={11} md={7} lg={10} xl={8} xxl={11}>
        <StyledBox sx={{ backgroundColor: 'success.light' }}>3</StyledBox>
      </Grid>
      <Grid item xxs={4} xs={6} sm={1} md={5} lg={2} xl={4} xxl={1}>
        <StyledBox sx={{ backgroundColor: 'warning.light' }}>4</StyledBox>
      </Grid>
    </Grid>
  );
};
