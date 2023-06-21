import MuiLinearProgress, {
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@novatics/styles';
import { Typography } from '@mui/material';

interface LinearProgressProps extends MuiLinearProgressProps {
  withLabel?: boolean;
}

const ProgressContainer = styled(Box)<LinearProgressProps>((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: props.theme.palette.grey[85],
  };
});

const LinearProgress = (props: LinearProgressProps) => (
  <ProgressContainer>
    <Box width="100%">
      <MuiLinearProgress {...props} />
    </Box>
    {props.withLabel && (
      <Typography variant="caption">{`${props.value}%`}</Typography>
    )}
  </ProgressContainer>
);

export { LinearProgress };
export default LinearProgress;
export * from '@mui/material/LinearProgress';
