import { PaletteOptions } from '@mui/material';
import { colors } from '@novatics/tokens';

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

export const palette: PaletteOptions = {
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
};

export default palette;
