import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { createTheme } from '@novatics-ui/styles';

const providerFn = ({ theme, children }) => {
  console.log('aaaaaaaaaaaaaa', theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const theme = createTheme();
addDecorator(withThemes(null, [theme], { providerFn }));
