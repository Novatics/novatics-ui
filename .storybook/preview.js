import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider, CssBaseline } from '@mui/material/styles';
import { createTheme } from '../packages/styles/src/index';

require('./styles.css');

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
