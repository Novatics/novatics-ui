import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@novatics/styles';

type PropsToOmit = 'disableFocusRipple' | 'centerRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef';

export interface CheckboxProps extends Omit<MuiCheckboxProps, PropsToOmit> {
  variant: 'filled' | 'outlined';
  error?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndeterminateIcon = styled('span')<{ variant: 'filled' | 'outlined'; }>(({ theme, variant }: { theme: any, variant: 'filled' | 'outlined'; }) => ({
  width: 14,
  height: 14,
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
    border: `2px solid ${variant === 'filled' ? theme.palette.grayScale.spaceStation : theme.palette.grayScale.spaceStation}`,

    '&:before': {
      backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette.grayScale.spaceStation,
    }
  },
}));

const UncheckedIcon = styled(CheckIcon)<{ error?: boolean; }>(({ theme, error }: { theme: any; error?: boolean; }) => ({
  width: 14,
  height: 14,
  borderRadius: '2px',
  border: `2px solid ${error ? theme.palette.error.main : theme.palette.grayScale.spaceStation}`,
  // Set color of the check icon
  color: 'transparent',

  'input:hover ~ &': !error && {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.dark,
    // Set color of the check icon
    color: theme.palette.primary.medium,
  },
}));

const CheckedIcon = styled(UncheckedIcon)<{ variant: 'filled' | 'outlined'; disabled?: boolean; }>(({ theme, variant, disabled }: { theme: any; variant?: 'filled' | 'outlined'; disabled?: boolean; }) => {
  const getColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.spaceStation;
    if (disabled && variant === 'filled') return theme.palette.grayScale.supernova;
    if (variant === 'filled') return theme.palette.grayScale.supernova;
    return theme.palette.primary.main;
  };

  const getBorderColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.spaceStation;
    if (disabled && variant === 'filled') return theme.palette.grayScale.spaceStation;
    if (variant === 'filled') return theme.palette.primary.main;
    return theme.palette.primary.main;
  };

  const getBackgroundColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.supernova;
    if (disabled && variant === 'filled') return theme.palette.grayScale.spaceStation;
    if (variant === 'filled') return theme.palette.primary.main;
    return theme.palette.grayScale.supernova;
  };

  return ({
    color: getColor(),
    backgroundColor: getBackgroundColor(),
    borderColor: getBorderColor(),

    'input:hover ~ &': {
      backgroundColor: disabled ? getBackgroundColor() : theme.palette.primary.light,
      borderColor: disabled ? getBorderColor() : theme.palette.primary.dark,
      color: disabled ? getColor() : theme.palette.grayScale.medium,
    },
  });
});

export function Checkbox({ variant = "filled", error, disabled, ...other }: CheckboxProps) {
  return <MuiCheckbox
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    disabled={disabled}
    icon={<UncheckedIcon error={error} />}
    checkedIcon={<CheckedIcon variant={variant} disabled={disabled} />}
    indeterminateIcon={<IndeterminateIcon variant={variant} />}
    {...other}
  />;
}

export default Checkbox;
