import { Components, Theme } from '@mui/material';
import { palette as themePalette } from '../palette';
import { addTransparency } from '../util';

const selectColor = (
  theme?: Theme,
  color?: string,
  isHover?: boolean
): string | undefined => {
  switch (color) {
    case 'primary':
      return isHover
        ? theme?.palette.primary?.dark
        : theme?.palette.primary?.main;
    case 'success':
    case 'error':
      return theme?.palette[color]?.dark;
    case 'secondary':
      return theme?.palette.grayScale?.blackHole;
    default:
      return theme?.palette.grayScale?.eclipse;
  }
};

const selectIconColor = (
  theme?: Theme,
  color?: string,
  disabled?: boolean,
  variant?: string
): string | undefined => {
  return disabled
    ? 'inherit'
    : variant === 'outlined'
    ? selectColor(theme, color)
    : themePalette.grayScale?.supernova;
};

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: (props) => {
      const { ownerState } = props;
      const theme = props.theme as Theme;
      return {
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
          backgroundColor: selectColor(theme, ownerState.color, true),
        },
        '.MuiButton-endIcon': {
          marginRight: '-8px',
        },
        '.MuiButton-startIcon': {
          marginLeft: '-8px',
        },
      };
    },
    outlined: (props) => {
      const { ownerState } = props;
      const theme = props.theme as Theme;
      return {
        borderColor: addTransparency(selectColor(theme, ownerState.color)),
        color: selectColor(theme, ownerState.color),
        '&:hover': {
          borderColor: addTransparency(
            selectColor(theme, ownerState.color, true)
          ),
          backgroundColor: addTransparency(
            selectColor(theme, ownerState.color, true)
          ),
        },
      };
    },
    text: (props) => {
      const { ownerState } = props;
      const theme = props.theme as Theme;
      return {
        color: selectColor(theme, ownerState.color),
        '&:hover': {
          backgroundColor: addTransparency(
            selectColor(theme, ownerState.color, true)
          ),
        },
      };
    },
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
    endIcon: (props) => {
      const { ownerState } = props;
      const theme = props.theme as Theme;
      return {
        color: selectIconColor(
          theme,
          ownerState.color,
          ownerState.disabled,
          ownerState.variant
        ),
      };
    },
    startIcon: (props) => {
      const { ownerState } = props;
      const theme = props.theme as Theme;
      return {
        color: selectIconColor(
          theme,
          ownerState.color,
          ownerState.disabled,
          ownerState.variant
        ),
      };
    },
  },
};
