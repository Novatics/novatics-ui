import { Components, Theme } from '@mui/material';

export const MuiGrid: Components['MuiGrid'] = {
  styleOverrides: {
    container: (props) => {
      const theme = props.theme as Theme;
      return {
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(2),
        },
        [theme.breakpoints.up('sm')]: {
          margin: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
          margin: theme.spacing(3),
        },
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(4),
        },
      };
    },
    item: (props) => {
      const theme = props.theme as Theme;

      return {
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0, 0.5),
        },
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(0, 0.5),
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(0, 1),
        },
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0, 1.5),
        },
      };
    },
  },
};
