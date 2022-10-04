import {
  createTheme as MUICreateTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import { palette as themePalette } from './palette';
import { borderRadius as themeBorderRadius } from './borderRadius';
import { Spacings } from './spacings';
import { themeShadows } from './shadows';
import { themeTypography } from './typography';
import { Length } from './types';

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
  return MUICreateTheme({
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
  });
};

export default themePalette;
