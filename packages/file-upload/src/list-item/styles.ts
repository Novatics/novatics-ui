import { Box, Stack } from '@mui/material';
import { styled } from '@novatics-ui/styles';

export const ListItemContainer = styled(Box)<{ $error: boolean }>(({
  $error,
  theme,
}) => {
  const borderColor = $error
    ? theme.palette.error.main
    : theme.palette.grey[20];
  return {
    display: 'grid',
    gridTemplateColumns: '1.5rem 1fr 2fr auto',
    gap: '8px',
    alignItems: 'center',
    padding: '8px 16px ',
    borderWidth: '1px',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderColor,
    minWidth: '500px',
    img: {
      maxWidth: '1.5rem',
      maxHeight: '1.5rem',
    },
  };
});

export const Actions = styled(Stack)(() => {
  return {
    button: {
      width: '2rem',
      height: '2rem',
    },
  };
});
