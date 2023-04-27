import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '../packages/styles/src/index';

import './styles.css';

const theme = createTheme();

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Intro', 'Core', '*'],
    },
  },
  darkMode: {
    current: 'dark',
    darkClass: 'darkClass',
    lightClass: 'lightClass',
    stylePreview: true,
  },
};
