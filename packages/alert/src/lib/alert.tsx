import MUIAlert, {
  AlertProps as MUIAlertProps,
  AlertColor,
} from '@mui/material/Alert';
import { styled } from '@novatics/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

/* eslint-disable-next-line */
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
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {action ? <Box mr="4px">{action}</Box> : null}
          {onClose ? (
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          ) : null}
        </Box>
      }
      sx={{ alignItems: title ? 'start' : 'center' }}
      {...other}
    >
      {title ? (
        <Content>
          <Typography variant='body' fontWeight="500" color='grey.85'>{title}</Typography>
          <Typography variant='bodySmall' color="grey.70">
            {children}
          </Typography>
        </Content>
      ) : (
        <Typography variant='body' fontWeight="500" color='grey.85'>{children}</Typography>
      )}
    </MUIAlert>
  );
};

export default Alert;
