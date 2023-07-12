import MUIBackdrop, {
  BackdropProps as MUIBackdropProps,
} from '@mui/material/Backdrop';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface BackdropProps extends MUIBackdropProps {
  children: ReactNode;
}

export function Backdrop(props: BackdropProps) {
  const { children, ...other } = props;

  return (
    <MUIBackdrop
      {...other}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(128, 128, 128, 0.5) ',
      }}
    >
      {children}
    </MUIBackdrop>
  );
}

export default Backdrop;
