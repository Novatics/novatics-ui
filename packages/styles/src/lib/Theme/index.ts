import { palette as themePalette } from './palette';
import { borderRadius as themeBorderRadius } from './borderRadius';
import { Spacings, spacings } from './spacings';
import { themeShadows } from './shadows';
import { themeTypography } from './typography';
import { Length } from './types';

export {
  themePalette as palette,
  themeBorderRadius as borderRadius,
  spacings,
  themeShadows as shadows,
  themeTypography as typography,
};

export const theme = {
  palette: themePalette,
  typography: themeTypography,
  spacing: (factor: Spacings): Length => `${Number(factor) * 0.5}rem`,
  customShadows: themeShadows,
};

export default theme;
