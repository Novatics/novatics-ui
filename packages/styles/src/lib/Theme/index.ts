import {
  createTheme as MUICreateTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';

import * as collapseList from './components/CollapseList';

export const createTheme = (
  options?: ThemeOptions,
  ...args: object[]
): Theme => {
  const { components: componentsInput = {}, ...others } = options ?? {};

  return MUICreateTheme({
    components: {
      // MuiButton: collapseList.fragment,
      NuiCollapseList: collapseList.fragment,
      ...componentsInput,
    },
    ...others,
  });
};

export default createTheme;
