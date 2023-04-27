import { Components } from '@mui/material';

export const MuiCheckbox: Components['MuiCheckbox'] = {
  styleOverrides: {
    root: {
      paddingTop: '4px',
      paddingRight: '4px',
      paddingBottom: '4px',
      paddingLeft: '4px',
      height: '24px',
      width: '24px',
      '&.Mui-disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'all',
      },
    },
  },
};
