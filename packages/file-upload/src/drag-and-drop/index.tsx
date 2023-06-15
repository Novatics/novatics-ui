import { UploadFile } from '@mui/icons-material';
import { Box } from '@mui/material';
import { styled } from '@novatics/styles';

export type DragAndDropVariant = 'inline' | 'fullscreen';
export interface DragAndDropProps {
  accept: string[];
  acceptedLabels?: string;
  onDrop: (files: File[]) => void;
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropAccepted?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropRejected?: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileDialogCancel?: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileDialogOpen?: (event: React.DragEvent<HTMLDivElement>) => void;
  noClick?: boolean;
  noDrag?: boolean;
  disabled?: boolean;
  title?: string;
  buttonLabel?: string;
  acceptedFormatsLabel?: string;
  uploadIcon?: React.ReactNode;
  variant?: DragAndDropVariant;
}

export const DragAndDropContainer = styled(Box)<{
  variant?: DragAndDropVariant;
}>((props) => {
  return {
    border: '1px dashed',
    borderRadius: '2px',
    borderColor: props.theme.palette.grey[50],
    minWidth: '600px',
  };
});

export function DragAndDrop(props: DragAndDropProps) {
  const {
    onDrop,
    title = 'Drag and drop files here',
    buttonLabel = 'Select files',
    acceptedFormatsLabel = 'Accepted formats',
    uploadIcon = <UploadFile />,
  } = props;
  return <DragAndDropContainer>{uploadIcon}</DragAndDropContainer>;
}
