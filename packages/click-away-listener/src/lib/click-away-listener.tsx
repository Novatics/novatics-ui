import ClickAwayListenerMui, {
  ClickAwayListenerProps,
} from '@mui/material/ClickAwayListener';

const ClickAwayListener = (props: ClickAwayListenerProps) => (
  <ClickAwayListenerMui {...props} />
);

export { ClickAwayListener };
export default ClickAwayListener;
export * from '@mui/material/ClickAwayListener';
