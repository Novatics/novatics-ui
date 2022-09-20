import { borderRadius as borderRadiusSizes } from '@novatics-ui/tokens';

interface BorderRadiusSize {
  px: number;
  rem: number;
}

interface BorderRadius {
  small: BorderRadiusSize;
  regular: BorderRadiusSize;
  large: BorderRadiusSize;
}

export const borderRadius: BorderRadius = {
  small: {
    px: borderRadiusSizes.small.px,
    rem: borderRadiusSizes.small.rem,
  },
  regular: {
    px: borderRadiusSizes.regular.px,
    rem: borderRadiusSizes.regular.rem,
  },
  large: {
    px: borderRadiusSizes.large.px,
    rem: borderRadiusSizes.large.rem,
  },
};

export default borderRadius;
