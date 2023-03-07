import React from 'react';
import {
  ThemeProvider,
  createTheme as MUICreateTheme,
} from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { createTheme } from '../packages/styles/src/index';

require('./styles.css');

const providerFn = ({ children }) => {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [{}], { providerFn }));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Intro', 'Core', '*'],
    },
  },
};
