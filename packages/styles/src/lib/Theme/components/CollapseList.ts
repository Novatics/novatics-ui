import {
  createTheme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import { StackProps } from '@mui/material/Stack';

import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export interface CollapseListProps extends Pick<StackProps, 'direction'> {
  labels: string[];
}

export interface CollapseListClasses {
  /** Styles applied to the root element. */
  root: string;
}

export declare type CollapseListClassKey = keyof CollapseListClasses;
// export declare function getCollapseListUtilityClass(slot: string): string;
// declare const collapseListClasses: CollapseListClasses;
// export default collapseListClasses;

export function getCollapseListUtilityClass(slot: string) {
  return generateUtilityClass('NuiCollapseList', slot);
}
const collapseListClasses = generateUtilityClasses('NuiCollapseList', ['root']);

export default collapseListClasses;

export interface INuiCollapseList {
  defaultProps?: ComponentsProps['NuiCollapseList'];
  styleOverrides?: ComponentsOverrides<Theme>['NuiCollapseList'];
  variants?: ComponentsVariants['NuiCollapseList'];
}

declare module '@mui/material/styles/' {
  interface ComponentNameToClassKey {
    NuiCollapseList: CollapseListClassKey;
  }

  interface ComponentsPropsList {
    NuiCollapseList: CollapseListProps;
  }

  interface Components {
    NuiCollapseList: INuiCollapseList;
  }
}

export const fragment: INuiCollapseList = {
  styleOverrides: {
    root: {
      fontSize: '3rem',
      background: 'red',
    },
  },
};
