import { useCallback, useEffect, useRef, useState } from 'react';
import { UploadFile } from '@mui/icons-material';
import { ButtonProps } from '@novatics-ui/button';
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
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropAccepted?: (event: File[]) => void;
  onDropRejected?: (event: File[]) => void;
  onFileDialogCancel?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileDialogOpen?: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleValidation?: (files: File[]) => string | null;
  disabled?: boolean;
  title?: string;
  buttonLabel?: string;
  acceptedFormatsLabel?: string;
  uploadIcon?: React.ReactNode;
  variant?: 'inline' | 'fullscreen';
  buttonProps?: ButtonProps;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
  multiple?: boolean;
}

export function DragAndDrop(props: DragAndDropProps) {
  const {
    onDrop,
    onDropAccepted,
    onDropRejected,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onFileDialogOpen,
    onFileDialogCancel,
    handleValidation,
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
    multiple,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [errorText, setErrorText] = useState<string>(error || '');
  const isFullscreen = variant === 'fullscreen';

  useEffect(() => {
    if (error) setErrorText(error);
  }, [error]);

  const handleFiles = useCallback(
    (files: File[]) => {
      if (handleValidation) {
        const validationResult = handleValidation(files);
        if (validationResult) {
          setErrorText(validationResult);
          if (onDropRejected) onDropRejected(files);
          return;
        }
      }

      if (onDropAccepted) onDropAccepted(files);
    },
    [handleValidation, onDropAccepted, onDropRejected],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      if (onDrop) onDrop(e);
      setDragOver(false);
      handleFiles(Array.from(e.dataTransfer.files));
    },
    [onDrop, handleFiles, disabled],
  );

  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      e.stopPropagation();
      if (onDragEnter) onDragEnter(e);
    },
    [onDragEnter, disabled],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      e.stopPropagation();
      if (onDragOver) onDragOver(e);
      setDragOver(true);
    },
    [onDragOver, disabled],
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      e.stopPropagation();
      if (onDragLeave) onDragLeave(e);
      setDragOver(false);
    },
    [onDragLeave, disabled],
  );

  const handleButton = () => {
    if (disabled) return;
    if (inputRef.current) inputRef.current.click();
  };

  const handleOpenDialog = (e: React.MouseEvent<HTMLInputElement>) => {
    if (onFileDialogOpen) onFileDialogOpen(e);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    } else {
      if (onFileDialogCancel) onFileDialogCancel(e);
    }
  };

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
    ) : errorText ? (
      <ErrorText variant="caption">{errorText}</ErrorText>
    ) : (
      <InlineFormatHint variant="caption" $disabled={disabled}>
        {acceptedFormatsLabel} {acceptedLabels}
      </InlineFormatHint>
    );

  return (
    <DragAndDropContainer
      variant={variant}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      $isHovering={dragOver}
      $error={Boolean(error)}
      $disabled={disabled}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        ref={inputRef}
        onClick={handleOpenDialog}
        onChange={handleInputOnChange}
        style={{ display: 'none' }}
        {...inputProps}
      />
      {uploadIcon}
      <Title variant={isFullscreen ? 'h5' : 'body'} $disabled={disabled}>
        {title}
      </Title>
      {formatsHint()}
      {isFullscreen && (
        <ErrorText $containerVariant={variant} variant="caption">
          {errorText}
        </ErrorText>
      )}
      <Button
        onClick={handleButton}
        color={error ? 'error' : 'primary'}
        size={isFullscreen ? 'large' : 'small'}
        variant="outlined"
        disabled={disabled}
        $containerVariant={variant}
        {...buttonProps}
      >
        {buttonLabel}
      </Button>
    </DragAndDropContainer>
  );
}
