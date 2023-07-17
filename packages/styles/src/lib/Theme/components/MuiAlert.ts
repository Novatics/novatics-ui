import { Components, Theme } from '@mui/material';

export const MuiAlert: Components['MuiAlert'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;
      return {
        borderRadius: '2px',
        display: 'flex',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,

        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            fontSize: '16px !important',
            paddingTop: '0px',
          },
        },

        '& .MuiAlert-action': {
          padding: '0px',
        },

        '& .MuiAlert-message': {
          padding: '0px',
          fontSize: '12px',
        },

        '&.MuiAlert-outlinedSuccess': {
          border: `1px solid ${theme.palette.success.main}`,
          '& .MuiAlert-icon': {
            color: theme.palette.success.main,
          },
        },

        '&.MuiAlert-outlinedWarning': {
          border: `1px solid ${theme.palette.warning.main}`,
          '& .MuiAlert-icon': {
            color: theme.palette.warning.main,
          },
        },

        '&.MuiAlert-outlinedError': {
          border: `1px solid ${theme.palette.error.main}`,
          '& .MuiAlert-icon': {
            color: theme.palette.error.main,
          },
        },

        '&.MuiAlert-outlinedInfo': {
          border: `1px solid ${theme.palette.info.main}`,
          '& .MuiAlert-icon': {
              color: theme.palette.info.main,
          },
        },

        '& .MuiSvgIcon-root': {
          height: '16px',
          width: '16px',
        },        
      };
    },
  },
};
