import { Components, Theme } from '@mui/material';

export const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;

      return {
        ...theme.typography.caption,
        color: theme.palette.grey?.[70],
        paddingTop: '4px',
        marginLeft: 0,
        marginRight: 0,
      };
    },
  },
};
