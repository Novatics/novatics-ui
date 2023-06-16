import { useCallback, useRef, useState } from 'react';
import { UploadFile } from '@mui/icons-material';
import { ButtonProps } from '@novatics/button';
import {
  Button,
  DragAndDropContainer,
  ErrorText,
  FullscreenFormatContainer,
  FullscreenFormatHint,
  FullscreenFormats,
  InlineFormatHint,
  Title,
} from './styles';
export interface DragAndDropProps {
  accept: string;
  acceptedLabels?: string;
  onDrop: (files: File[]) => void;
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropAccepted?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropRejected?: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileDialogCancel?: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileDialogOpen?: (event: React.MouseEvent<HTMLInputElement>) => void;
  noClick?: boolean;
  noDrag?: boolean;
  disabled?: boolean;
  title?: string;
  buttonLabel?: string;
  acceptedFormatsLabel?: string;
  uploadIcon?: React.ReactNode;
  variant?: 'inline' | 'fullscreen';
  buttonProps?: ButtonProps;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
}

export function DragAndDrop(props: DragAndDropProps) {
  const {
    onDrop,
    onDragOver,
    onDragLeave,
    onFileDialogOpen,
    accept,
    error,
    disabled,
    title = 'Drag and drop files here',
    buttonLabel = 'Select files',
    acceptedFormatsLabel = 'Accepted formats:',
    acceptedLabels,
    variant = 'inline',
    uploadIcon = <UploadFile />,
    buttonProps,
    inputProps,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const isFullscreen = variant === 'fullscreen';

  const formatsHint = () =>
    isFullscreen ? (
      <FullscreenFormatContainer>
        <FullscreenFormatHint variant="overline" $disabled={disabled}>
          {acceptedFormatsLabel}
        </FullscreenFormatHint>
        <FullscreenFormats variant="caption" $disabled={disabled}>
          {acceptedLabels}
        </FullscreenFormats>
      </FullscreenFormatContainer>
    ) : error ? (
      <ErrorText variant="caption">{error}</ErrorText>
    ) : (
      <InlineFormatHint variant="caption" $disabled={disabled}>
        {acceptedFormatsLabel} {acceptedLabels}
      </InlineFormatHint>
    );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      if (onDrop) onDrop(Array.from(e.dataTransfer.files));
      setDragOver(false);
    },
    [onDrop, disabled]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      e.stopPropagation();
      if (onDragOver) onDragOver(e);
      setDragOver(true);
    },
    [onDragOver, disabled]
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      e.stopPropagation();
      if (onDragLeave) onDragLeave(e);
      setDragOver(false);
    },
    [onDragLeave, disabled]
  );

  const handleButton = () => {
    if (disabled) return;
    if (inputRef.current) inputRef.current.click();
  };

  const handleOpenDialog = (e: React.MouseEvent<HTMLInputElement>) => {
    if (onFileDialogOpen) onFileDialogOpen(e);
  };

  return (
    <DragAndDropContainer
      variant={variant}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      $isHovering={dragOver}
      $error={Boolean(error)}
      $disabled={disabled}
    >
      <input
        type="file"
        accept={accept}
        ref={inputRef}
        onClick={handleOpenDialog}
        style={{ display: 'none' }}
        {...inputProps}
      />
      {uploadIcon}
      <Title variant={isFullscreen ? 'h5' : 'body'} $disabled={disabled}>
        {title}
      </Title>
      {formatsHint()}
      {isFullscreen && (
        <ErrorText containerVariant={variant} variant="caption">
          {error}
        </ErrorText>
      )}
      <Button
        onClick={handleButton}
        color={error ? 'error' : 'primary'}
        size={isFullscreen ? 'large' : 'small'}
        variant="outlined"
        disabled={disabled}
        containerVariant={variant}
        {...buttonProps}
      >
        {buttonLabel}
      </Button>
    </DragAndDropContainer>
  );
}
