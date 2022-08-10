import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BoxContainer = styled(Box)`
  margin-top: auto;
  margin-bottom: 24px;
  position: relative;

  button {
    position: absolute;
  }

  .backButton {
    left: 0;
  }
  .nextButton {
    right: 0;
  }
`;
