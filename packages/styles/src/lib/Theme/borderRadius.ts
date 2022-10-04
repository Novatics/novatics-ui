import { borderRadius as borderRadiusSizes } from '@novatics-ui/tokens';
import { Length } from './types';

interface BorderRadiusSize {
  px: Length;
  rem: Length;
}

interface BorderRadius {
  small: BorderRadiusSize;
  regular: BorderRadiusSize;
  large: BorderRadiusSize;
}

export const borderRadius: BorderRadius = {
  small: {
    px: `${borderRadiusSizes.small.px}px`,
    rem: `${borderRadiusSizes.small.rem}rem`,
  },
  regular: {
    px: `${borderRadiusSizes.regular.px}px`,
    rem: `${borderRadiusSizes.regular.rem}rem`,
  },
  large: {
    px: `${borderRadiusSizes.large.px}px`,
    rem: `${borderRadiusSizes.large.rem}rem`,
  },
};

export default borderRadius;
