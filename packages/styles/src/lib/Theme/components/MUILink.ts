import { Components } from '@mui/material';
import { palette as themePalette } from '../palette';

export const MuiLink: Components['MuiLink'] = {
  styleOverrides: {
    root: {
      color: themePalette.support?.main,
      '&:visited': {
        color: themePalette.primary?.main,
      },
    },
  },
};
