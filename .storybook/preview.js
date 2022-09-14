import React from 'react';
import {
  ThemeProvider,
  createTheme as MUICreateTheme,
} from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

const providerFn = ({ theme, children }) => {
  const muiTheme = MUICreateTheme(theme);
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
const theme = {
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
};

addDecorator(withThemes(null, [theme], { providerFn }));
