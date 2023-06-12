import { Components } from '@mui/material';

export const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: '2px',
    },
    notchedOutline: {
      borderWidth: '0 !important',
    },
  },
};
