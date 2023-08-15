import { TypographyOptions } from '@mui/material/styles/createTypography';

import { typography } from '@novatics-ui/tokens';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body: React.CSSProperties;
    bodySmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    bodySmall: true;
  }
}

type Typographies =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'overline';

const typographies = Object.keys(typography.typography) as Typographies[];

export const themeTypography = typographies.reduce(
  (acc, curr: Typographies) => {
    acc[curr] = {
      fontWeight: typography.typography[curr].fontWeight,
      fontSize: `${typography.typography[curr].fontSize.pixel}px`,
      lineHeight: typography.typography[curr].lineHeight,
      fontFamily: typography.typography[curr].fontFamily,
    };
    return acc;
  },
  {} as TypographyOptions,
);

export default themeTypography;
