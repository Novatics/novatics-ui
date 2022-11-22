import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  :has(button:only-child) {
    justify-content: flex-end;
  }
`;
