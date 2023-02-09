import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@novatics/styles';

type PropsToOmit = 'disableFocusRipple' | 'centerRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef';
// TODO: How should default Color be handled?
type Color = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface CheckboxProps extends Omit<MuiCheckboxProps, PropsToOmit> {
  variant: 'filled' | 'outlined';
  color?: Color;
  // error?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndeterminateIcon = styled('span')<{ colorType: Color; variant: 'filled' | 'outlined'; }>(({ colorType, theme, variant }: { colorType: Color, theme: any, variant: 'filled' | 'outlined'; }) => ({
  width: 14,
  height: 14,
  backgroundColor: variant === 'filled' ? theme.palette[colorType].main : 'transparent',
  borderRadius: '2px',
  border: variant === 'filled' ? `2px solid ${theme.palette[colorType].main}` : `2px solid ${theme.palette[colorType].main}`,

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
    backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette[colorType].main,
  },

  'input:hover ~ &': {
    backgroundColor: variant === 'filled' ? theme.palette[colorType].dark : theme.palette[colorType].light,
    borderColor: theme.palette[colorType].dark,

    '&:before': {
      backgroundColor: variant === 'filled' ? theme.palette.grayScale.supernova : theme.palette[colorType].medium ? theme.palette[colorType].medium : theme.palette[colorType].dark,
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

const UncheckedIcon = styled(CheckIcon)<{ colorType: Color; error?: boolean; }>(({ colorType, theme, error }: { colorType: Color; theme: any; error?: boolean; }) => ({
  width: 14,
  height: 14,
  borderRadius: '2px',
  border: `2px solid ${error ? theme.palette.error.main : theme.palette.grayScale.spaceStation}`,
  // Set color of the check icon
  color: 'transparent',

  'input:hover ~ &': {
    backgroundColor: theme.palette[colorType].light,
    borderColor: theme.palette[colorType].dark,
    // Set color of the check icon
    color: theme.palette[colorType].medium ? theme.palette[colorType].medium : theme.palette[colorType].dark,
  },
}));

const CheckedIcon = styled(UncheckedIcon)<{ colorType: Color; variant: 'filled' | 'outlined'; disabled?: boolean; }>(({ colorType, theme, variant, disabled }: { colorType: Color; theme: any; variant?: 'filled' | 'outlined'; disabled?: boolean; }) => {
  const getColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.spaceStation;
    if (disabled && variant === 'filled') return theme.palette.grayScale.supernova;
    if (variant === 'filled') return theme.palette.grayScale.supernova;
    return theme.palette[colorType].main;
  };

  const getBorderColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.spaceStation;
    if (disabled && variant === 'filled') return theme.palette.grayScale.spaceStation;
    if (variant === 'filled') return theme.palette[colorType].main;
    return theme.palette[colorType].main;
  };

  const getBackgroundColor = () => {
    if (disabled && variant === 'outlined') return theme.palette.grayScale.supernova;
    if (disabled && variant === 'filled') return theme.palette.grayScale.spaceStation;
    if (variant === 'filled') return theme.palette[colorType].main;
    return theme.palette.grayScale.supernova;
  };

  return ({
    color: getColor(),
    backgroundColor: getBackgroundColor(),
    borderColor: getBorderColor(),

    'input:hover ~ &': {
      backgroundColor: disabled ? getBackgroundColor() : theme.palette[colorType].light,
      borderColor: disabled ? getBorderColor() : theme.palette[colorType].dark,
      color: disabled ? getColor() : theme.palette.grayScale.medium,
    },
  });
});

// TODO: How could we make it more customizable regarding adding new colors?
export function Checkbox({ variant = "filled", color = "primary", disabled, ...other }: CheckboxProps) {
  return <MuiCheckbox
    color="default"
    disableFocusRipple
    disableRipple
    disableTouchRipple
    disabled={disabled}
    icon={<UncheckedIcon colorType={color} error={color === 'error'} />}
    checkedIcon={<CheckedIcon colorType={color} variant={variant} disabled={disabled} />}
    indeterminateIcon={<IndeterminateIcon colorType={color} variant={variant} />}
    {...other}
  />;
}

export default Checkbox;
