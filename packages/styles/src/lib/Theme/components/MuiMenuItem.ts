import { Components } from '@mui/material';

export const MuiMenuItem: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'all',
      },

      '.MuiListItemText-root': {
        '.MuiTypography-root': {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        },
      },
    },
  },
};
