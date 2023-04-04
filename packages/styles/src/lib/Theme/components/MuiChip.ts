import { Components } from '@mui/material';
import { palette as themePalette } from '../palette';
import { themeTypography } from '../typography';
import '../fonts.css';

// This adds 50% transparency to hexadecimal colors
const addTransparency = (color?: string): string => `${color}80`;

const selectColor = (color?: string, variant?: string): string | undefined => {
  switch (color) {
    case 'primary':
      return themePalette.primary?.main;
    case 'success':
    case 'error':
      return themePalette[color]?.dark;
    case 'warning':
      return variant === 'outlined'
        ? themePalette.warning?.main
        : themePalette.warning?.dark;
    case 'info':
      return themePalette.support?.main;
    default:
      return themePalette.grayScale?.eclipse;
  }
};

const selectBackgroundColor = (color?: string): string | undefined => {
  switch (color) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'error':
      return themePalette[color]?.light;
    case 'info':
      return themePalette.support?.light;
    default:
      return themePalette.grayScale?.newMoon;
  }
};

export const MuiChip: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: selectBackgroundColor(ownerState.color),
      color: selectColor(ownerState.color, ownerState.variant),
      borderColor: selectBackgroundColor(ownerState.color),
      borderWidth: '1px',
      borderStyle: 'solid',
      padding: '6px 8px',
      transition: '0.3s',
    }),
    sizeSmall: {
      padding: '2px 4px',
    },
    outlined: ({ ownerState }) => ({
      backgroundColor: 'transparent',
      borderColor: addTransparency(
        selectColor(ownerState.color, ownerState.variant)
      ),
    }),
    label: {
      ...themeTypography.caption,
      fontWeight: 500,
      padding: '0 4px',
    },
    icon: ({ ownerState }) => ({
      height: '20px',
      width: '20px',
      margin: '0 0 0 4px',
      color: selectColor(ownerState.color, ownerState.variant),
    }),
    deleteIcon: ({ ownerState }) => ({
      height: '20px',
      width: '20px',
      margin: '0 0 0 4px',
      color: selectColor(ownerState.color, ownerState.variant),
      transition: '0.3s',
      '&:hover': {
        color: addTransparency(
          selectColor(ownerState.color, ownerState.variant)
        ),
      },
    }),
    clickable: ({ ownerState }) => ({
      '&:hover': {
        backgroundColor: `${selectBackgroundColor(
          ownerState.color
        )} !important`, // This is needed to override the default hover color since MUI doesn't use .MuiChip-clickable for this
        color: selectColor(ownerState.color),
        borderColor: addTransparency(selectColor(ownerState.color)),
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    }),
  },
};
