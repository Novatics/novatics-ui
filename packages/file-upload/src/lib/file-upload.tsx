import { FromUrl, FromUrlProps } from '../from-url';
import { Box, Typography } from '@mui/material';
import { styled } from '@novatics/styles';

export interface FileUploadProps {
  fromUrlProps: FromUrlProps;
}

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

export function FileUpload(props: FileUploadProps) {
  const { fromUrlProps } = props;

  return (
    <FileUploadContainer>
      <Box>
        <Typography variant="h6">From URL:</Typography>
        <FromUrl
          onUpload={(url) => console.log(`url`, url)}
          {...fromUrlProps}
        />
      </Box>
    </FileUploadContainer>
  );
}

export default FileUpload;
