import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ButtonContainer = styled(Box)`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  :has(button:only-child) {
    justify-content: flex-end;
  }
`;
