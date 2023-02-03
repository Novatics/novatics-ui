import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

import { styled } from '@novatics/styles';


/* eslint-disable-next-line */
export interface CheckboxProps extends MuiCheckboxProps {
  variant: 'filled' | 'outlined';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndeterminateIcon = styled('span')<{ variant: 'filled' | 'outlined'; }>(({ theme, variant }: { theme: any, variant: 'filled' | 'outlined'; }) => ({
  width: 16,
  height: 16,
  backgroundColor: variant === 'filled' ? theme.palette.primary.main : 'transparent',
  borderRadius: '2px',
  border: variant === 'filled' ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.primary.main}`,

  '&:before': {
    // center content to create line in the middle
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'block',
    width: 8.89,
    height: 1.78,
    content: '""',
    backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette.primary.main,
  },

  'input:hover ~ &': {
    backgroundColor: variant === 'filled' ? theme.palette.primary.dark : theme.palette.primary.light,
    borderColor: theme.palette.primary.dark,

    '&:before': {
      backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette.primary.medium,
    }
  },

  'input:disabled ~ &': {
    backgroundColor: variant === 'filled' ? theme.palette.grayScale.spaceStation : 'transparent',
    border: variant === 'filled' ? `2px solid ${theme.palette.grayScale.spaceStation}` : `2px solid ${theme.palette.grayScale.spaceStation}`,

    '&:before': {
      backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette.grayScale.spaceStation,
    }
  },
}));

export function Checkbox({ variant = "filled", ...other }: CheckboxProps) {
  return <MuiCheckbox
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    indeterminateIcon={<IndeterminateIcon variant={variant} />}
    // icon={<RadioIcon error={error} />}
    // checkedIcon={<RadioCheckedIcon error={error} />}
    // sx={deepmerge({ '&:hover': { backgroundColor: 'transparent' } }, sx)}
    {...other}
  />;
}

export default Checkbox;
