import { Box, Typography } from '@mui/material';
import { styled } from '@novatics/styles';
import { FromUrl, FromUrlProps } from '../from-url';
import { DragAndDrop, DragAndDropProps } from '../drag-and-drop';
import { ListItem, ListItemProps } from '../list-item';

export interface FileUploadProps {
  fromUrlProps: FromUrlProps;
  dragAndDropProps: DragAndDropProps;
  listItemProps: ListItemProps;
}

export const FileUploadContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export function FileUpload(props: FileUploadProps) {
  const { fromUrlProps, dragAndDropProps, listItemProps } = props;

  return (
    <FileUploadContainer>
      <Typography variant="h6">Drag and Drop:</Typography>
      <DragAndDrop {...dragAndDropProps} />
      <Typography variant="h6">From URL:</Typography>
      <FromUrl onAccept={(url) => console.log(`url`, url)} {...fromUrlProps} />
      <Typography variant="h6">List Item:</Typography>
      <ListItem {...listItemProps} />
    </FileUploadContainer>
  );
}

export default FileUpload;
