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
}>(({ colorType, theme: { palette }, variant }) => {
  const isFilled = variant === 'filled';
  const colorVariant = palette[colorType];

  return {
    width: 14,
    height: 14,
    backgroundColor: isFilled ? colorVariant.main : 'transparent',
    borderRadius: '2px',
    border: `2px solid ${colorVariant.main}`,
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
      backgroundColor: isFilled
        ? palette.grayScale.supernova
        : colorVariant.main,
    },

    'input:hover ~ &': {
      backgroundColor: isFilled ? colorVariant.dark : colorVariant.light,
      borderColor: colorVariant.dark,

      '&:before': {
        backgroundColor: isFilled
          ? palette.grayScale.supernova
          : colorVariant.medium,
      },
    },

    'input:disabled ~ &': {
      backgroundColor: isFilled
        ? palette.grayScale.spaceStation
        : 'transparent',
      border: `2px solid ${palette.grayScale.spaceStation}`,

      '&:before': {
        backgroundColor: isFilled
          ? palette.grayScale.supernova
          : palette.grayScale.spaceStation,
      },
    },
  };
});

const UncheckedIcon = styled(CheckIcon)<{ colorType: Color; error?: boolean }>(
  ({ colorType, theme: { palette }, error }) => ({
    width: 14,
    height: 14,
    borderRadius: '2px',
    border: `2px solid ${
      error ? palette.error.main : palette.grayScale.spaceStation
    }`,
    // Set color of the check icon
    color: 'transparent',
    'input:hover ~ &': {
      backgroundColor: palette[colorType].light,
      borderColor: palette[colorType].dark,
      // Set color of the check icon
      color: palette[colorType].medium || palette[colorType].dark,
    },
  })
);

const CheckedIcon = styled(UncheckedIcon)<{
  colorType: Color;
  variant: 'filled' | 'outlined';
  disabled?: boolean;
}>(({ colorType, theme: { palette }, variant, disabled }) => {
  const isFilled = variant === 'filled';

  const colors = useMemo(() => {
    if (disabled && !isFilled) {
      return {
        color: palette.grayScale.spaceStation,
        borderColor: palette.grayScale.spaceStation,
        backgroundColor: palette.grayScale.supernova,
      };
    }
    if (disabled && isFilled) {
      return {
        color: palette.grayScale.supernova,
        borderColor: palette.grayScale.spaceStation,
        backgroundColor: palette.grayScale.spaceStation,
      };
    }
    if (isFilled) {
      return {
        color: palette.grayScale.supernova,
        borderColor: palette[colorType].main,
        backgroundColor: palette[colorType].main,
      };
    }
    return {
      color: palette[colorType].main,
      borderColor: palette[colorType].main,
      backgroundColor: palette.grayScale.supernova,
    };
  }, [colorType, disabled, isFilled, palette]);

  return {
    color: colors.color,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,

    'input:hover ~ &': {
      color: colors.color,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
    },
  };
});

// TODO: How could we make it more customizable regarding adding new colors?
export function Checkbox({
  variant = 'filled',
  color = 'primary',
  disabled,
  ...other
}: CheckboxProps) {
  return (
    <MuiCheckbox
      disableFocusRipple
      disableRipple
      disableTouchRipple
      disabled={disabled}
      icon={<UncheckedIcon colorType={color} error={color === 'error'} />}
      checkedIcon={
        <CheckedIcon colorType={color} variant={variant} disabled={disabled} />
      }
      indeterminateIcon={
        <IndeterminateIcon colorType={color} variant={variant} />
      }
      {...other}
    />
  );
}

export default Checkbox;
