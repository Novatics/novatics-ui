import { Breakpoints } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const themeBreakpoints: Partial<Breakpoints> = {
  values: {
    xxs: 0,
    xs: 600,
    sm: 960,
    md: 1024,
    lg: 1200,
    xl: 1440,
    xxl: 1728,
  },
};
