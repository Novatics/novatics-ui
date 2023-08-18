import React from 'react';
import {
  Dialog as MUIDialog,
  DialogProps as MUIDialogProps,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button, ButtonProps } from '@novatics-ui/button';
import isEmpty from 'lodash.isempty';
import isNil from 'lodash.isempty';
// adding @novatics-ui/styles prevent a typescript error from typography component.
// Typescript get confused because of the redeclaration of types made inside @novatics-ui/styles
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from '@novatics-ui/styles';

export type DialogProps = MUIDialogProps & {
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  actionButtons?: ButtonProps[];
  dialogActions?: React.ReactNode;
  headerDivider?: boolean;
  footerDivider?: boolean;
};

export const Dialog = (props: DialogProps) => {
  const {
    onClose,
    children,
    title,
    description,
    actionButtons,
    dialogActions,
    headerDivider,
    footerDivider,
    ...other
  } = props;

  return (
    <MUIDialog {...other}>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {title ? (
            <Typography variant="h5" color="grey.85">
              {title}
            </Typography>
          ) : null}
          {description ? (
            <Typography mt="4px" variant="bodySmall" color="grey.70">
              {description}
            </Typography>
          ) : null}
        </Box>

        {onClose ? (
          <IconButton color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      {headerDivider ? <Divider /> : null}
      <DialogContent>{children}</DialogContent>
      {footerDivider ? <Divider /> : null}

      {!isNil(dialogActions) ? (
        dialogActions
      ) : !isEmpty(actionButtons) ? (
        <DialogActions>
          {actionButtons?.map((actionButton) => <Button {...actionButton} />)}
        </DialogActions>
      ) : null}
    </MUIDialog>
  );
};

export default Dialog;
