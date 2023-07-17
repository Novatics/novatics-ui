import { Components, Theme } from '@mui/material';

import { addTransparency } from '../util';

export const MuiBackdrop: Components['MuiBackdrop'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;

      return {
        backgroundColor: addTransparency(theme.palette.grey[50], 0.5),
      };
    },
  },
};
