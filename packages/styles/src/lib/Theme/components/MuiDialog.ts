import { Components, Theme } from '@mui/material';

export const MuiDialog: Components['MuiDialog'] = {
  styleOverrides: {
    root: (props) => {
      const theme = props.theme as Theme;

      return {
        color: theme.palette.text.primary,

        '& .MuiDialogTitle-root': {
          padding: '0px 24px',
          paddingTop: '16px',
          paddingBottom: '23px',
        },

        '& .MuiDialogActions-root': {
          padding: '16px 24px',
          '& .MuiButton-root': {
            maxHeight: '36px !important',
          },
        },

        '& .MuiButtonBase-root': {
          '& .MuiSvgIcon-root': {
            fontSize: '14px !important',
            paddingTop: '0px',
          },
        },

        '& .MuiDialogContent-root': {
          padding: '24px !important',
        },
      };
    },
  },
};
