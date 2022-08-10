import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

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
