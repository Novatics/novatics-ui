import styled from '@emotion/styled';

import { ListItem, ListItemProps } from '../list-item';
import { DragAndDrop, DragAndDropProps } from '../drag-and-drop';
import { FromUrl, FromUrlProps } from '../from-url';

/* eslint-disable-next-line */
export interface FileUploadProps {
  listItemProps?: ListItemProps;
  dragAndDropProps?: DragAndDropProps;
  fromUrlProps?: FromUrlProps;
}

const StyledFileUpload = styled.div`
  color: pink;
`;

export function FileUpload(props: FileUploadProps) {
  const { listItemProps, dragAndDropProps, fromUrlProps } = props;

  return (
    <StyledFileUpload>
      <h1>Welcome to FileUpload!</h1>
      <DragAndDrop {...dragAndDropProps} />
      <FromUrl {...fromUrlProps} />
      <ListItem {...listItemProps} />
    </StyledFileUpload>
  );
}

export default FileUpload;
