import { ListItemContainer, Actions } from './styles';
import {
  FeedOutlined as DefaultFileIcon,
  ImageOutlined as ImageIcon,
  TableChartOutlined as SheetIcon,
  PictureAsPdfOutlined as PdfIcon,
  CheckCircleOutline as CheckIcon,
  CancelOutlined as CancelIcon,
  RestartAlt as RetryIcon,
} from '@mui/icons-material';
import { Typography, IconButton } from '@mui/material';
import { LinearProgress } from '@novatics/linear-progress';
import { useState } from 'react';

export interface ListItemProps {
  fileName?: string;
  fileIcon?: React.ReactNode | null;
  retryIcon?: React.ReactNode | null;
  cancelIcon?: React.ReactNode | null;
  successIcon?: React.ReactNode | null;
  imagePreview?: string;
  loadingPercentage?: number;
  succeeded?: boolean;
  error?: string;
  onSuccessClick?: () => void;
  onCancel?: () => void;
  onRetry?: () => void;
  onDelete?: () => void;
  deleteAfterSuccess?: boolean;
}

export function ListItem(props: ListItemProps) {
  const {
    fileName,
    fileIcon,
    retryIcon,
    cancelIcon,
    successIcon,
    imagePreview,
    loadingPercentage,
    succeeded,
    error,
    onSuccessClick,
    onCancel = () => undefined,
    onRetry = () => undefined,
    onDelete = () => undefined,
    deleteAfterSuccess = false,
  } = props;

  const [hoverSuccessButton, setHoverSuccessButton] = useState(false);

  const renderIcon = () => {
    const sheetExtensions = ['.csv', '.xls', '.ods'];
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

    if (imagePreview) return <img src={imagePreview} alt={fileName} />;
    if (fileIcon !== undefined) return fileIcon;
    if (fileName?.includes('.pdf'))
      return <PdfIcon sx={{ color: 'grey.20' }} />;
    if (sheetExtensions.some((v) => fileName?.includes(v)))
      return <SheetIcon sx={{ color: 'grey.20' }} />;
    if (imageExtensions.some((v) => fileName?.includes(v)))
      return <ImageIcon sx={{ color: 'grey.20' }} />;

    return <DefaultFileIcon sx={{ color: 'grey.20' }} />;
  };

  const renderName = () => {
    if (succeeded && onSuccessClick)
      return (
        <Typography
          sx={{ cursor: 'pointer', color: 'support.main' }}
          onClick={onSuccessClick}
        >
          {fileName}
        </Typography>
      );
    return <Typography>{fileName}</Typography>;
  };

  const renderProgress = () => {
    if (error)
      return (
        <Typography justifySelf="end" color="error">
          {error}
        </Typography>
      );
    if (succeeded)
      return (
        <LinearProgress variant="determinate" value={100} showPercentage />
      );
    if (loadingPercentage !== undefined)
      return (
        <LinearProgress
          variant="determinate"
          value={loadingPercentage}
          showPercentage
        />
      );
    return <LinearProgress />;
  };

  const renderActions = () => {
    if (error)
      return (
        <Actions direction="row">
          <IconButton aria-label="retry" onClick={onRetry}>
            {retryIcon || <RetryIcon />}
          </IconButton>
          <IconButton aria-label="delete" onClick={onDelete}>
            {cancelIcon || <CancelIcon />}
          </IconButton>
        </Actions>
      );
    if (succeeded)
      return (
        successIcon || (
          <Actions>
            <IconButton
              onMouseEnter={() => setHoverSuccessButton(true)}
              onMouseLeave={() => setHoverSuccessButton(false)}
              onClick={onDelete}
              disabled={!deleteAfterSuccess}
            >
              {hoverSuccessButton ? (
                <CancelIcon />
              ) : (
                <CheckIcon sx={{ color: 'success.main' }} />
              )}
            </IconButton>
          </Actions>
        )
      );

    return (
      <Actions>
        <IconButton aria-label="cancel" onClick={onCancel}>
          <CancelIcon />
        </IconButton>
      </Actions>
    );
  };

  return (
    <ListItemContainer $error={Boolean(error)}>
      {renderIcon()}
      {renderName()}
      {renderProgress()}
      {renderActions()}
    </ListItemContainer>
  );
}
