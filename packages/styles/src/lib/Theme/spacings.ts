import { spacings as spacingSizes } from '@novatics-ui/tokens';
import { LenghUnitModes, Length, LengthUnit } from './types';
import { SpacingOptions } from '@mui/system';

export type Spacings = keyof typeof spacingSizes;

declare module '@mui/material/styles/createTheme' {
  interface Spacing {
    (spacing: Spacings): Length;
  }
  interface ThemeOptions {
    spacing?: Spacing | SpacingOptions;
  }
}
