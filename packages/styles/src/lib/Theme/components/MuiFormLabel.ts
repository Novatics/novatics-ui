import { Components, Theme } from '@mui/material';

export const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;

      return {
        ...theme.typography.overline,
        textTransform: 'uppercase',
        color: theme.palette.grey?.[70],
        marginBottom: theme.spacing(1),
      };
    },
  },
};
