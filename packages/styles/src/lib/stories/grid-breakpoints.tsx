import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { colors } from '@novatics/tokens';
import { styled } from '@novatics/styles';

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
    <Grid container spacing={2} padding={1}>
      <Grid xxs={4} xs={6} sm={1} md={5} lg={2} xl={4} xxl={1} padding={1}>
        <StyledBox sx={{ backgroundColor: 'tertiary.light' }}>1</StyledBox>
      </Grid>
      <Grid xxs={8} xs={6} sm={11} md={7} lg={10} xl={8} xxl={11} padding={1}>
        <StyledBox sx={{ backgroundColor: 'secondary.light' }}>2</StyledBox>
      </Grid>
      <Grid xxs={8} xs={6} sm={11} md={7} lg={10} xl={8} xxl={11} padding={1}>
        <StyledBox sx={{ backgroundColor: 'success.light' }}>3</StyledBox>
      </Grid>
      <Grid xxs={4} xs={6} sm={1} md={5} lg={2} xl={4} xxl={1} padding={1}>
        <StyledBox sx={{ backgroundColor: 'warning.light' }}>4</StyledBox>
      </Grid>
    </Grid>
  );
};
