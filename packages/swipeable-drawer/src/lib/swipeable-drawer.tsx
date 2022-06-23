import SwipeableDrawerMui, {
  SwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';

const SwipeableDrawer = (props: SwipeableDrawerProps) => (
  <SwipeableDrawerMui {...props} />
);

export { SwipeableDrawer };
export default SwipeableDrawer;
export * from '@mui/material/SwipeableDrawer';
