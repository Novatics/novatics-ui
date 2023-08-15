import { Box } from '@mui/material';
import { styled } from '@novatics-ui/styles';
import { FromUrlProps } from '.';

interface FromURLContainerProps extends Pick<FromUrlProps, 'variant'> {
  disabled?: boolean;
}

export const FromURLContainer = styled(Box)<FromURLContainerProps>((props) => {
  const border = props.variant === 'single' ? '1px solid' : 'none';
  const padding = props.variant === 'single' ? '24px' : '0';

  return {
    border: border,
    padding: padding,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    borderColor: props.theme.palette.grey[20],
    width: 'fit-content',
    minWidth: '500px',
  };
});
