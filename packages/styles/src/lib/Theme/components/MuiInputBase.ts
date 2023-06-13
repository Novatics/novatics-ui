import { Components, Theme } from '@mui/material';

export const MuiInputBase: Components['MuiInputBase'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;

      return {
        ...theme.typography.bodySmall,
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1.5),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1.5),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.grey?.[20],
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        borderTopLeftRadius: '2px',
        borderBottomLeftRadius: '2px',
        minHeight: '36px',

        ':hover:not(.Mui-disabled):not(.MuiInputBase-readOnly):not(.Mui-error)':
          {
            borderColor: theme.palette.primary?.main,
          },

        '&.Mui-focused:not(.Mui-disabled):not(.MuiInputBase-readOnly):not(.Mui-error)':
          {
            borderColor: theme.palette.primary?.main,
          },

        '&.Mui-disabled': {
          cursor: 'not-allowed',
        },

        '& .Mui-disabled': {
          cursor: 'not-allowed',
        },

        '&.NuiInputField-sizeLarge': {
          ...theme.typography.body,
          height: '40px',
        },
      };
    },
    error: (props) => {
      const theme = props.theme as Theme;
      return {
        borderColor: theme.palette.error.main,
      };
    },
    sizeSmall: (props) => {
      const theme = props.theme as Theme;

      return {
        height: '30px',

        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      };
    },
    adornedEnd: (props) => {
      const theme = props.theme as Theme;

      return {
        paddingRight: theme.spacing(0.5),
        '& .MuiInputAdornment-root .MuiIconButton-root': {
          marginRight: 0,
        },
      };
    },
    input: () => {
      return {
        paddingTop: 0,
        paddingBottom: 0,
      };
    },
  },
};
