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
import { MuiAlert } from './Theme/components/MuiAlert';
import { MuiCheckbox } from './Theme/components/MuiCheckbox';
import { MuiChip } from './Theme/components/MuiChip';
import { MuiDialog } from './Theme/components/MuiDialog';
import { MuiDivider } from './Theme/components/MuiDivider';
import { MuiFormLabel } from './Theme/components/MuiFormLabel';
import { MuiInputBase } from './Theme/components/MuiInputBase';
import { MuiFormHelperText } from './Theme/components/MuiFormHelperText';
import { MuiButton } from './Theme/components/MuiButton';
import { MuiRadio } from './Theme/components/MuiRadio';
import { MuiOutlinedInput } from './Theme/components/MuiOutlinedInput';
import { MuiSelect } from './Theme/components/MuiSelect';
import { MuiLinearProgress } from './Theme/components/MuiLinearProgress';
import { MuiLink } from './Theme/components/MUILink';
import { MuiBackdrop } from './Theme/components/MuiBackdrop';
import { MuiGrid } from './Theme/components/MuiGrid';
import { MuiMenuItem } from './Theme/components/MuiMenuItem';

import './Theme/fonts.css';

export { themePalette, themeBorderRadius };

const createComponents = (componentsInput: ThemeOptions['components']) => {
  return deepmerge(
    {
      MuiAlert,
      MuiCheckbox,
      MuiChip,
      MuiDialog,
      MuiDivider,
      MuiFormLabel,
      MuiInputBase,
      MuiFormHelperText,
      MuiButton,
      MuiLinearProgress,
      MuiRadio,
      MuiOutlinedInput,
      MuiSelect,
      MuiLink,
      MuiGrid,
      MuiBackdrop,
      MuiMenuItem,
    },
    componentsInput,
  );
};

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
    other,
  );

  return MUICreateTheme(nuiTheme, ...args);
};

export default createTheme;
