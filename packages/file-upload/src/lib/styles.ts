import { Box } from '@mui/material';
import { styled } from '@novatics/styles';

export const FileUploadContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div > *:first-child {
    margin: 10px 0;
  }

  > div:not(:first-of-type):before {
    content: '';
    display: block;
    height: 1px;
    background-color: lightgray;
  }
`;
