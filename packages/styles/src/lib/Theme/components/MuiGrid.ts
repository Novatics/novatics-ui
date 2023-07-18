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
            padding: theme.spacing(0, 1 / 2),
          },
        [theme.breakpoints.up('sm')]: {
          //apply default padding horizontally items, divided by 2 so the sum of both paddings equals the correct spacing between items
          padding: theme.spacing(0, 1 / 2),
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(0, 2 / 2),
        },
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0, 3 / 2),
        },
      };
    },
  },
};
