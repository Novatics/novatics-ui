import { Components, Theme } from '@mui/material';

export const MuiGrid: Components['MuiGrid'] = {
  defaultProps: {
    spacing: { xxs: 1, xs: 2, md: 3 },
  },
  styleOverrides: {
    container: (props) => {
      const theme = props.theme as Theme;
      return {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      };
    },
  },
};
