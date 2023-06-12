import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@novatics/styles';
import { useMemo } from 'react';

type PropsToOmit =
  | 'disableFocusRipple'
  | 'centerRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef';
// TODO: How should default Color be handled?
type Color = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface CheckboxProps extends Omit<MuiCheckboxProps, PropsToOmit> {
  variant: 'filled' | 'outlined';
  color?: Color;
}

const IndeterminateIcon = styled('span')<{
  colorType: Color;
  variant: 'filled' | 'outlined';
  disabled?: boolean;
}>(({ colorType, theme: { palette }, variant, disabled }) => {
  const isFilled = variant === 'filled';
  const colorVariant = palette[colorType];
  const backgroundColor = disabled
    ? palette.grey[20]
    : isFilled
    ? colorVariant.main
    : 'transparent';

  const borderColor = disabled ? palette.grey[20] : colorVariant.main;
  return {
    width: 14,
    height: 14,
    backgroundColor: backgroundColor,
    borderRadius: '2px',
    border: `2px solid ${borderColor}`,
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
      backgroundColor: isFilled ? palette.grey[0] : colorVariant.main,
    },

    'input:hover:not([disabled]) ~ &': {
      backgroundColor: isFilled ? colorVariant.dark : colorVariant.light,
      borderColor: colorVariant.dark,

      '&:before': {
        backgroundColor: isFilled ? palette.grey[0] : colorVariant.medium,
      },
    },

    'input:disabled ~ &': {
      backgroundColor: isFilled ? palette.grey[20] : 'transparent',
      border: `2px solid ${palette.grey[20]}`,

      '&:before': {
        backgroundColor: isFilled ? palette.grey[0] : palette.grey[20],
      },
    },
  };
});

const UncheckedIcon = styled(CheckIcon)<{
  colorType: Color;
  error?: boolean;
  disabled?: boolean;
}>(({ colorType, theme: { palette }, error, disabled }) => {
  const borderColor = error
    ? palette.error.main
    : disabled
    ? palette.grey[20]
    : palette.grey[35];
  return {
    width: 14,
    height: 14,
    borderRadius: '2px',
    border: `2px solid ${borderColor}`,
    // Set color of the check icon
    color: 'transparent',
    'input:hover:not([disabled]) ~ &': {
      backgroundColor: palette[colorType].light,
      borderColor: palette[colorType].dark,
      // Set color of the check icon
      color: palette[colorType].medium || palette[colorType].dark,
    },
  };
});

const CheckedIcon = styled(UncheckedIcon)<{
  colorType: Color;
  variant: 'filled' | 'outlined';
  disabled?: boolean;
}>(({ colorType, theme: { palette }, variant, disabled }) => {
  const isFilled = variant === 'filled';

  const colors = useMemo(() => {
    if (disabled && !isFilled) {
      return {
        color: palette.grey[20],
        borderColor: palette.grey[20],
        backgroundColor: palette.grey[0],
      };
    }
    if (disabled && isFilled) {
      return {
        color: palette.grey[0],
        borderColor: palette.grey[20],
        backgroundColor: palette.grey[20],
      };
    }
    if (isFilled) {
      return {
        color: palette.grey[0],
        borderColor: palette[colorType].main,
        backgroundColor: palette[colorType].main,
      };
    }
    return {
      color: palette[colorType].main,
      borderColor: palette[colorType].main,
      backgroundColor: palette.grey[0],
    };
  }, [colorType, disabled, isFilled, palette]);

  return {
    color: colors.color,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,

    'input:hover:not([disabled]) ~ &': {
      color: colors.color,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
    },
  };
});

// TODO: How could we make it more customizable regarding adding new colors?
export const Checkbox = ({
  variant = 'filled',
  color = 'primary',
  disabled,
  ...other
}: CheckboxProps) => (
  <MuiCheckbox
    disableFocusRipple
    disableRipple
    disableTouchRipple
    disabled={disabled}
    icon={
      <UncheckedIcon
        colorType={color}
        error={color === 'error'}
        disabled={disabled}
      />
    }
    checkedIcon={
      <CheckedIcon colorType={color} variant={variant} disabled={disabled} />
    }
    indeterminateIcon={
      <IndeterminateIcon
        colorType={color}
        variant={variant}
        disabled={disabled}
      />
    }
    {...other}
  />
);

export default Checkbox;
