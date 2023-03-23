import {
  createTheme as MUICreateTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import { palette as themePalette } from './Theme/palette';
import { borderRadius as themeBorderRadius } from './Theme/borderRadius';
import { Spacings } from './Theme/spacings';
import { themeShadows } from './Theme/shadows';
import { themeTypography } from './Theme/typography';
import { Length } from './Theme/types';
import { themeBreakpoints } from './Theme/breakpoints';

export { themePalette, themeBorderRadius };

export const createTheme = (
  options?: ThemeOptions,
  ...args: object[]
): Theme => {
  const {
    components: componentsInput = {},
    palette,
    ...others
  } = options ?? {};

  return MUICreateTheme(
    {
      breakpoints: themeBreakpoints,
      palette: {
        ...themePalette,
        ...palette,
      },
      typography: themeTypography,
      spacing: (factor: Spacings): Length => `${Number(factor) * 0.5}rem`,
      customShadows: themeShadows,
      components: {
        ...componentsInput,
      },
      ...others,
    },
    ...args
  );
};

export default createTheme;
