import { ListItemContainer } from './styles';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { LinearProgress } from '@novatics/linear-progress';
import { Stack, Typography } from '@mui/material';
import { Button } from '@novatics/button';

export interface ListItemProps {
  fileName?: string;
  icon?: React.ReactNode | null;
  imagePreview?: string;
  loadingPercentage?: number;
  uploaded?: boolean;
  error?: string;
  onNameClick?: () => void;
  onCancel?: () => void;
  onRetry?: () => void;
  onDelete?: () => void;
}

export function ListItem(props: ListItemProps) {
  const {
    fileName,
    icon,
    imagePreview,
    loadingPercentage,
    uploaded,
    error,
    onNameClick,
    onCancel,
    onRetry,
    onDelete,
  } = props;

  const renderIcon = () => {
    const sheetExtensions = ['.csv', '.xls', '.ods'];
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

    if (imagePreview) return <img src={imagePreview} alt={fileName} />;
    if (icon !== undefined) return icon;
    if (fileName?.includes('.pdf')) return <PictureAsPdfOutlinedIcon />;
    if (sheetExtensions.some((v) => fileName?.includes(v)))
      return <TableChartOutlinedIcon />;
    if (imageExtensions.some((v) => fileName?.includes(v)))
      return <ImageOutlinedIcon />;

    return <FeedOutlinedIcon />;
  };

  const renderProgress = () => {
    if (error) return <Typography color="error">{error}</Typography>;
    if (uploaded)
      return (
        <LinearProgress variant="determinate" value={100} showPercentage />
      );
    if (loadingPercentage)
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
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small" onClick={onRetry}>
            Retry icon
          </Button>
          <Button variant="outlined" size="small" onClick={onDelete}>
            Delete icon
          </Button>
        </Stack>
      );
    if (uploaded)
      return <CheckCircleOutlineIcon sx={{ color: 'success.main' }} />;

    return (
      <Button variant="outlined" size="small" onClick={onCancel}>
        Cancel icon
      </Button>
    );
  };

  return (
    <ListItemContainer>
      {renderIcon()}
      <Typography>{fileName}</Typography>
      {renderProgress()}
      {renderActions()}
    </ListItemContainer>
  );
}
