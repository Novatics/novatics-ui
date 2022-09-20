import { shadows as rawShadows } from '@novatics-ui/tokens';
import { Shadows as MuiShadows } from '@mui/material/styles/shadows';
import { Length, RGBA } from './types';

type ShadowType = `${Length} ${Length} ${Length} ${Length} ${RGBA}`;

interface Shadows {
  blackhole: {
    low: number;
    medium: number;
    intermediate: number;
    high: number;
  };
  cosmos: {
    low: number;
    medium: number;
    intermediate: number;
    high: number;
  };
}

export const shadows: Shadows = {
  blackhole: {
    low: 1,
    medium: 2,
    intermediate: 3,
    high: 4,
  },
  cosmos: {
    low: 5,
    medium: 6,
    intermediate: 7,
    high: 8,
  },
};

type ShadowsArray = Array<string | ShadowType>;

export const themeShadowsArray: ShadowsArray = [
  'none',
  rawShadows['blackhole--low'],
  rawShadows['blackhole--medium'],
  rawShadows['blackhole--intermediate'],
  rawShadows['blackhole--high'],
  rawShadows['cosmos--low'],
  rawShadows['cosmos--medium'],
  rawShadows['cosmos--intermediate'],
  rawShadows['cosmos--high'],
];

const fillShadowsArray = (shadowsArray: string[]): MuiShadows => {
  const filledShadowsArray = shadowsArray;
  for (let i = 0; i < 25; i += 1) {
    if (!filledShadowsArray[i]) filledShadowsArray[i] = '';
    filledShadowsArray.push(shadowsArray[i]);
  }
  return filledShadowsArray as MuiShadows;
};

export const themeShadows: MuiShadows = fillShadowsArray(themeShadowsArray);
