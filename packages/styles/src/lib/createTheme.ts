import {
  createTheme as MUICreateTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { palette as themePalette } from './Theme/palette';
import { borderRadius as themeBorderRadius } from './Theme/borderRadius';
import { Spacings } from './Theme/spacings';
import { themeShadows } from './Theme/shadows';
import { themeTypography } from './Theme/typography';
import { Length } from './Theme/types';
import { themeBreakpoints } from './Theme/breakpoints';
import { MuiChip } from './Theme/components/MuiChip';
import { MuiDivider } from './Theme/components/MuiDivider';
import './Theme/fonts.css';

export { themePalette, themeBorderRadius };

export const createTheme = (
  options?: ThemeOptions,
  ...args: object[]
): Theme => {
  const { components: componentsInput = {}, palette, ...other } = options ?? {};

  const components = createComponents(componentsInput);

  const nuiTheme = deepmerge(
    {
      breakpoints: themeBreakpoints,
      palette: {
        ...themePalette,
        ...palette,
      },
      typography: themeTypography,
      spacing: (factor: Spacings): Length => `${Number(factor) * 0.5}rem`,
      customShadows: themeShadows,
      components,
    },
    other
  );

  return MUICreateTheme(nuiTheme, ...args);
};

const createComponents = (componentsInput: ThemeOptions['components']) => {
  return deepmerge(
    {
      MuiChip,
      MuiDivider,
    },
    componentsInput
  );
};

export default createTheme;
