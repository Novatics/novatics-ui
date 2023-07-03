import MuiLinearProgress, {
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@novatics/styles';
import { Typography } from '@mui/material';

interface LinearProgressProps extends MuiLinearProgressProps {
  showPercentage?: boolean;
}

const ProgressContainer = styled(Box)<LinearProgressProps>((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: props.theme.palette.grey[85],
  };
});

const ProgressBar = styled(MuiLinearProgress)<LinearProgressProps>((props) => {
  return {
    backgroundColor: props.theme.palette.grey[10],
    width: '100%',
    height: '6px',
  };
});

const LinearProgress = (props: LinearProgressProps) => (
  <ProgressContainer>
    <ProgressBar {...props} />
    {props.showPercentage && (
      <Typography variant="caption">{`${props.value}%`}</Typography>
    )}
  </ProgressContainer>
);

export { LinearProgress };
export default LinearProgress;
export * from '@mui/material/LinearProgress';
