import { Components, Theme } from '@mui/material';

export const MuiDivider: Components['MuiDivider'] = {
  styleOverrides: {
    textAlignLeft: {
      '::before': {
        width: '24px',
      },
    },
    textAlignRight: {
      '::after': {
        width: '24px',
      },
    },
    wrapper: (props) => {
      const theme = props.theme as Theme;
      return {
        padding: '4px 8px',
        color: theme.palette.grey[50],
        ...theme.typography.overline,
      };
    },
    wrapperVertical: (props) => {
      const theme = props.theme as Theme;
      return {
        padding: '8px 4px',
        color: theme.palette.grey[50],
        ...theme.typography.overline,
      };
    },
  },
};
