import { shadows as rawShadows } from '@novatics/tokens';
import { Length, RGBA } from './types';

type ShadowType = `${Length} ${Length} ${Length} ${Length} ${RGBA}`;

export interface ShadowGradient {
  low: ShadowType;
  medium: ShadowType;
  intermediate: ShadowType;
  high: ShadowType;
}

export interface Shadows {
  blackhole: ShadowGradient;
  cosmos: ShadowGradient;
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    customShadows?: Shadows;
  }
  interface BaseTheme {
    customShadows: Shadows;
  }
}

export const themeShadows: Shadows = {
  blackhole: {
    low: rawShadows['blackhole--low'] as ShadowType,
    medium: rawShadows['blackhole--medium'] as ShadowType,
    intermediate: rawShadows['blackhole--intermediate'] as ShadowType,
    high: rawShadows['blackhole--high'] as ShadowType,
  },
  cosmos: {
    low: rawShadows['cosmos--low'] as ShadowType,
    medium: rawShadows['cosmos--medium'] as ShadowType,
    intermediate: rawShadows['cosmos--intermediate'] as ShadowType,
    high: rawShadows['cosmos--high'] as ShadowType,
  },
};
