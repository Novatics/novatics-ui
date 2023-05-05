import { Components } from '@mui/material';
import { palette as themePalette } from '../palette';
import { addTransparency } from '../util';

const selectColor = (color?: string, isHover?: boolean): string | undefined => {
  switch (color) {
    case 'primary':
      return isHover ? themePalette.primary?.dark : themePalette.primary?.main;
    case 'success':
    case 'error':
      return themePalette[color]?.dark;
    case 'secondary':
      return themePalette.grayScale?.blackHole;
    default:
      return themePalette.grayScale?.eclipse;
  }
};

const selectIconColor = (
  color?: string,
  disabled?: boolean,
  variant?: string
): string | undefined => {
  return disabled
    ? 'inherit'
    : variant === 'outlined'
    ? selectColor(color)
    : themePalette.grayScale?.supernova;
};

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: '8px 16px',
      borderRadius: '2px',
      boxShadow: 'unset',
      textTransform: 'unset',
      minHeight: '36px',
      lineHeight: '20px',
      fontWeight: '600',
      transition: '0.3s',
      '&:hover': {
        boxShadow: 'unset',
        backgroundColor: selectColor(ownerState.color, true),
      },
      '.MuiButton-endIcon': {
        marginRight: '-8px',
      },
      '.MuiButton-startIcon': {
        marginLeft: '-8px',
      },
    }),
    outlined: ({ ownerState }) => ({
      borderColor: addTransparency(selectColor(ownerState.color)),
      color: selectColor(ownerState.color),
      '&:hover': {
        borderColor: addTransparency(selectColor(ownerState.color, true)),
        backgroundColor: addTransparency(selectColor(ownerState.color, true)),
      },
    }),
    text: ({ ownerState }) => ({
      color: selectColor(ownerState.color),
      '&:hover': {
        backgroundColor: addTransparency(selectColor(ownerState.color, true)),
      },
    }),
    sizeSmall: {
      minHeight: '30px',
      padding: '5px 13px',
      '.MuiButton-endIcon': {
        marginRight: '-4px',
      },
      '.MuiButton-startIcon': {
        marginLeft: '-4px',
      },
    },
    sizeLarge: {
      minHeight: '40px',
      padding: '10px 18px',
    },
    endIcon: ({ ownerState }) => ({
      color: selectIconColor(
        ownerState.color,
        ownerState.disabled,
        ownerState.variant
      ),
    }),
    startIcon: ({ ownerState }) => ({
      color: selectIconColor(
        ownerState.color,
        ownerState.disabled,
        ownerState.variant
      ),
    }),
  },
};
