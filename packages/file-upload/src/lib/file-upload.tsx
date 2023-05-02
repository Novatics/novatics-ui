import { ListItem, ListItemProps } from '../list-item';
import { DragAndDrop, DragAndDropProps } from '../drag-and-drop';
import { FromUrl, FromUrlProps } from '../from-url';
import { Box, Typography } from '@mui/material';
import { FileUploadContainer } from './styles';

export interface FileUploadProps {
  listItemProps?: ListItemProps;
  dragAndDropProps?: DragAndDropProps;
  fromUrlProps: FromUrlProps;
}

export function FileUpload(props: FileUploadProps) {
  const { listItemProps, dragAndDropProps, fromUrlProps } = props;

  return (
    <FileUploadContainer>
      <Box>
        <Typography variant="h6">Drag and Drop:</Typography>
        <DragAndDrop {...dragAndDropProps} />
      </Box>

      <Box>
        <Typography variant="h6">From URL:</Typography>
        <FromUrl
          onUpload={(url) => console.log(`url`, url)}
          {...fromUrlProps}
        />
      </Box>

      <Box>
        <Typography variant="h6">List Item:</Typography>
        <ListItem {...listItemProps} />
      </Box>
    </FileUploadContainer>
  );
}

export default FileUpload;
