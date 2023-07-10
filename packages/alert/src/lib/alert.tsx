import MUIAlert, {
  AlertProps as MUIAlertProps,
  AlertColor,
} from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
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

const StyledAlert = styled(MUIAlert)(({ theme }) => ({
  borderRadius: '2px',
  marginTop: '36px',
  marginBottom: '12px',
  paddingTop: '6px',
  paddingBottom: '8px',
  display: 'flex',
  color: theme.palette.text.primary,
  fontSize: 'small',
  backgroundColor: theme.palette.background.default,

  '& .MuiAlert-icon': {
    marginRight: '12px',
    fontSize: '16px',
  },

  '& .MuiAlert-message': {
    padding: '6px 0',
  },

  '&.MuiAlert-standardSuccess': {
    border: `1px solid ${theme.palette.success.main}`,
    '& .MuiAlert-icon': {
      color: theme.palette.success.main,
    },
  },

  '&.MuiAlert-standardWarning': {
    border: `1px solid ${theme.palette.warning.main}`,
    '& .MuiAlert-icon': {
      color: theme.palette.warning.main,
    },
  },

  '&.MuiAlert-standardError': {
    border: `1px solid ${theme.palette.error.main}`,
    '& .MuiAlert-icon': {
      color: theme.palette.error.main,
    },
  },

  '&.MuiAlert-standardInfo': {
    border: `1px solid ${theme.palette.info.main}`,
    '& .MuiAlert-icon': {
      color: theme.palette.info.main,
    },
  },
}));

const CloseButton = styled(IconButton)`
  padding: 4px;
  border-radius: 5px;
  color: black;
  font-size: 16px;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Alert = (props: AlertProps) => {
  const {
    children,
    title,
    severity = 'success',
    onClose,
    action,
    ...other
  } = props;

  const severityIcons = {
    success: <CheckCircleIcon fontSize="small" />,
  };

  return (
    <StyledAlert
      severity={severity}
      icon={severityIcons[severity]}
      action={
        onClose ? (
            <CloseButton size="small" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </CloseButton>
        ) : (
          action ? <div>{action}</div> : null
        )
      }
      sx={{ alignItems: title ? 'start' : 'center' }}
      {...other}
    >
      {title ? (
        <Content>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="GrayText">
            {children}
          </Typography>
        </Content>
      ) : (
        <Typography variant="body1">{children}</Typography>
      )}
    </StyledAlert>
  );
};

export default Alert;
