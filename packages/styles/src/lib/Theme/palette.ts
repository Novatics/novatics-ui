import { SimplePaletteColorOptions, PaletteOptions } from '@mui/material';
import { colors } from '@novatics-ui/tokens';

declare module '@mui/material' {
  interface Color {
    0: string;
    5: string;
    10: string;
    20: string;
    35: string;
    50: string;
    70: string;
    85: string;
  }
}
declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    main: string;
    dark?: string;
    medium?: string;
    light?: string;
    contrastText?: string;
  }
  interface GrayScale {
    blackHole?: string;
    eclipse?: string;
    penumbra?: string;
    spaceStation?: string;
    fullMoon?: string;
    newMoon?: string;
    halo?: string;
    supernova?: string;
  }
  interface PaletteOptions {
    grayScale?: GrayScale;
    tertiary?: SimplePaletteColorOptions;
    support?: SimplePaletteColorOptions;
  }
  interface Palette {
    grayScale: GrayScale;
    support: SimplePaletteColorOptions;
  }
  interface TypeObject {
    grayScale: GrayScale;
  }
  interface PaletteColor {
    light: string;
    main: string;
    medium?: string;
    dark: string;
    contrastText: string;
  }
}

export interface ColorsOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  success?: SimplePaletteColorOptions;
  warning?: SimplePaletteColorOptions;
  error?: SimplePaletteColorOptions;
}

export const palette: ColorsOptions = {
  grayScale: {
    blackHole: colors['blackHole'],
    eclipse: colors['eclipse'],
    penumbra: colors['penumbra'],
    spaceStation: colors['spaceStation'],
    fullMoon: colors['fullMoon'],
    newMoon: colors['newMoon'],
    halo: colors['halo'],
    supernova: colors['supernova'],
  },
  primary: {
    main: colors['nebula'],
    dark: colors['nebula--dark'],
    medium: colors['nebula--medium'],
    light: colors['nebula--light'],
  },
  secondary: {
    main: colors['sunlight'],
    dark: colors['sunlight--dark'],
    medium: colors['sunlight--medium'],
    light: colors['sunlight--light'],
  },
  tertiary: {
    main: colors['cosmos'],
    dark: colors['cosmos--dark'],
    medium: colors['cosmos--medium'],
    light: colors['cosmos--light'],
  },
  success: {
    main: colors['aurora'],
    dark: colors['aurora--dark'],
    light: colors['aurora--light'],
  },
  warning: {
    main: colors['bigBang'],
    dark: colors['bigBang--dark'],
    light: colors['bigBang--light'],
  },
  error: {
    main: colors['mars'],
    dark: colors['mars--dark'],
    light: colors['mars--light'],
  },
  support: {
    main: colors['universe'],
    light: colors['universe--light'],
  },
  grey: {
    85: colors['blackHole'],
    70: colors['eclipse'],
    50: colors['penumbra'],
    35: colors['spaceStation'],
    20: colors['fullMoon'],
    10: colors['newMoon'],
    5: colors['halo'],
    0: colors['supernova'],
  },
};

export default palette;
