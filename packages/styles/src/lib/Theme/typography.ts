import { TypographyOptions } from '@mui/material/styles/createTypography';

import { typography } from '@novatics-ui/tokens';

type Typographies =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption';

const typographies = Object.keys(typography.typography) as Typographies[];

export const themeTypography = typographies.reduce(
  (acc, curr: Typographies) => {
    acc[curr] = {
      fontWeight: typography.typography[curr].fontWeight,
      fontSize: `${typography.typography[curr].fontSize.rem}rem`,
      lineHeight: typography.typography[curr].lineHeight,
    };
    return acc;
  },
  {} as TypographyOptions
);

export default themeTypography;
