import React from 'react';
import MUIDialog, { DialogProps as MUIDialogProps } from '@mui/material/Dialog';
import { Box, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogProps extends MUIDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  mainAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
  headerDivider?: boolean;
  footerDivider?: boolean;
}

export const Dialog = (props: DialogProps) => {
  const {
    open,
    onClose,
    children,
    title,
    description,
    size,
    mainAction,
    secondaryAction,
    headerDivider,
    footerDivider,
    ...other
  } = props;

  const sizes = {
    sm: '600px',
    md: '960px',
    lg: '1200px',
  };

  const width = sizes[size || 'md'];

  return (
    <MUIDialog open={open} {...other} PaperProps={{ style: { minWidth: width } }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant='h5' fontSize='24px' color='grey.85'>{title}</Typography>
          {description ? <Typography mt='4px' variant='bodySmall' color='grey.70'>
            {description}
          </Typography> : null}
        </Box>
        <IconButton color="inherit" onClick={onClose} aria-label="close"  >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {headerDivider ? <Divider /> : null}
      <DialogContent>{children}</DialogContent>
      {footerDivider ? <Divider /> : null}
      {(mainAction || secondaryAction) && (
        <DialogActions>
          {secondaryAction}
          {mainAction}
        </DialogActions>
      )}
    </MUIDialog>
  );
};

export default Dialog;
