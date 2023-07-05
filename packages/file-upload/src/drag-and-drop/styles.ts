import { Box, Typography } from '@mui/material';
import { styled } from '@novatics/styles';
import { Button as NuiButton } from '@novatics/button';

export const DragAndDropContainer = styled(Box)<{
  variant?: 'inline' | 'fullscreen';
  $error?: boolean;
  $disabled?: boolean;
  $isHovering?: boolean;
}>(({ theme, variant, $isHovering, $error, $disabled }) => {
  const isFullscreen = variant === 'fullscreen';

  const borderColor = (
    $isHovering
      ? theme.palette.primary.main
      : $error
      ? theme.palette.error.main
      : $disabled
      ? theme.palette.grey[20]
      : theme.palette.grey[50]
  ).replace('#', '%23');
  const padding = isFullscreen ? '60px' : '18px 20px';
  const minWidth = isFullscreen ? '600px' : '450px';
  const backgroundColor = $isHovering
    ? theme.palette.primary.light
    : 'transparent';
  const iconColor = $isHovering
    ? theme.palette.primary.main
    : $disabled
    ? theme.palette.grey[20]
    : theme.palette.grey[35];
  const gridValues = isFullscreen
    ? {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr auto auto auto 1fr',
        gap: '1.75rem',
        justifyItems: 'center',
      }
    : {
        gridTemplateColumns: '2rem 1fr auto',
        gridTemplateRows: 'auto auto',
        gap: '0 1.125rem',
      };
  const iconSize = isFullscreen ? '4rem' : '2rem';
  const iconGridArea = isFullscreen ? '1 / 1 / 2 / 2' : '1 / 1 / 3 / 2';
  const cursor = $disabled ? 'not-allowed' : 'unset';

  return {
    display: 'grid',
    ...gridValues,
    alignItems: 'center',
    borderRadius: '2px',
    minWidth,
    padding,
    cursor,
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='${borderColor}' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='4' stroke-linecap='round'/%3e%3c/svg%3e")`,
    svg: {
      color: iconColor,
      width: iconSize,
      height: iconSize,
      gridArea: iconGridArea,
    },
  };
});

export const Title = styled(Typography)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => ({
    color: $disabled ? theme.palette.grey[50] : theme.palette.grey[85],
  }),
);

export const FullscreenFormatContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  marginTop: '2rem',
}));

export const ErrorText = styled(Typography)<{
  $containerVariant?: 'fullscreen' | 'inline';
}>(({ $containerVariant, theme }) => {
  const isFullscreen = $containerVariant === 'fullscreen';
  const gridArea = isFullscreen ? '4 / 1 / 5 / 2' : 'unset';
  return {
    color: theme.palette.error.main,
    gridArea,
  };
});

export const FullscreenFormatHint = styled(Typography)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => ({
    display: 'inline-block',
    color: $disabled ? theme.palette.grey[20] : theme.palette.grey[50],
    fontWeight: theme.typography.fontWeightRegular,
  }),
);

export const FullscreenFormats = styled(Typography)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => ({
    color: $disabled ? theme.palette.grey[20] : theme.palette.grey[80],
  }),
);

export const InlineFormatHint = styled(Typography)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => ({
    color: $disabled ? theme.palette.grey[20] : theme.palette.grey[60],
  }),
);

export const Button = styled(NuiButton)<{
  $containerVariant: 'fullscreen' | 'inline';
}>(({ $containerVariant }) => {
  const isFullscreen = $containerVariant === 'fullscreen';
  const gridArea = isFullscreen ? '3 / 1 / 4 / 2' : '1 / 3 / 3 / 4';
  return {
    gridArea,
  };
});
