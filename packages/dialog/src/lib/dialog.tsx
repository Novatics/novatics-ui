import React from 'react';
import { Dialog as MUIDialog, DialogProps as MUIDialogProps, Box, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogProps extends MUIDialogProps {
  onClose?: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  actionButtons?: React.ReactNode[]; // Array de botões de ação
  dialogActions?: React.ReactNode; // JSX.Element que substitui o DialogActions padrão
  headerDivider?: boolean;
  footerDivider?: boolean;
}

export const Dialog = (props: DialogProps) => {
  const {
    onClose,
    children,
    title,
    description,
    size,
    actionButtons,
    dialogActions,
    headerDivider,
    footerDivider,
    ...other
  } = props;

  return (
    <MUIDialog {...other}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          {title ? <Typography variant='h5' color='grey.85'>
            {title}
          </Typography> : null}
          {description ? <Typography mt='4px' variant='bodySmall' color='grey.70'>
            {description}
          </Typography> : null}
        </Box>

        {onClose ? (
          <IconButton color="inherit" onClick={onClose} aria-label="close"  >
            <CloseIcon />
          </IconButton>
        ) : null}
        
      </DialogTitle>
      
      {headerDivider ? <Divider /> : null}
      <DialogContent>{children}</DialogContent>
      {footerDivider ? <Divider /> : null}

      {dialogActions !== undefined ? (
        dialogActions
      ) : actionButtons !== undefined && actionButtons.length > 0 ? (
        <DialogActions>
          {actionButtons.map((actionButton, index) => (
            <React.Fragment key={index}>{actionButton}</React.Fragment>
          ))}
        </DialogActions>
      ) : null}
    </MUIDialog>
  );
};

export default Dialog;
