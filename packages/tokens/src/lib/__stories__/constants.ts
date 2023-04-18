import keys from 'lodash.keys';
import includes from 'lodash.includes';
import snakecase from 'lodash.snakecase';
import startcase from 'lodash.startcase';

import Tokens from '../tokens';

const LIGHTER_COLORS = ['newMoon', 'halo', 'supernova'];
export const formatColorName = (color) =>
  startcase(snakecase(color)).replace('_', ' ');
export const getColorTextColor = (color) => {
  if (includes(color, '--light')) return '#000000';
  if (includes(LIGHTER_COLORS, color)) return '#000000';
  return '#FFFFFF';
};
export const defaultColors = keys(Tokens.colors)
  .filter((color) => !includes(color, '--'))
  .map((color) => formatColorName(color));
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});
export const sortedSpacings = keys(Tokens.spacings).sort(collator.compare);
