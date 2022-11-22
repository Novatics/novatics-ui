import { spacings as spacingSizes } from '@novatics/tokens';
import { Length } from './types';
import { SpacingOptions } from '@mui/system';

export type Spacings = keyof typeof spacingSizes;

export { spacingSizes as spacings };

declare module '@mui/material/styles/createTheme' {
  interface Spacing {
    (spacing: Spacings): Length;
  }
  interface ThemeOptions {
    spacing?: Spacing | SpacingOptions;
  }
}
