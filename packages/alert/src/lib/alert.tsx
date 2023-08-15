import MUIAlert, {
  AlertProps as MUIAlertProps,
  AlertColor,
} from '@mui/material/Alert';
import { styled } from '@novatics-ui/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export interface AlertProps extends MUIAlertProps {
  severity?: AlertColor;
  onClose?: () => void;
  title?: string | undefined;
  action?: React.ReactNode;
}

const CloseButton = styled(IconButton)`
  padding: 4px;
  border-radius: 5px;
  color: black;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 2px;
`;

const ActionContent = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const Alert = (props: AlertProps) => {
  const {
    children,
    title,
    severity = 'info',
    variant = 'outlined',
    onClose,
    action,
    ...other
  } = props;

  const severityIcons = {
    success: <CheckCircleIcon fontSize="small" />,
  };

  return (
    <MUIAlert
      variant={variant}
      severity={severity}
      icon={severityIcons[severity]}
      action={
        <ActionContent>
          {action ? <Box mr="4px">{action}</Box> : null}
          {onClose ? (
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          ) : null}
        </ActionContent>
      }
      sx={{ alignItems: title ? 'start' : 'center' }}
      {...other}
    >
      {title ? (
        <Content>
          <Typography variant="body" fontWeight="500" color="grey.85">
            {title}
          </Typography>
          <Typography variant="bodySmall" color="grey.70">
            {children}
          </Typography>
        </Content>
      ) : (
        <Typography variant="body" fontWeight="500" color="grey.85">
          {children}
        </Typography>
      )}
    </MUIAlert>
  );
};

export default Alert;
