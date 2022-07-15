import BottomNavigationActionMui, {
  BottomNavigationActionProps,
} from '@mui/material/BottomNavigationAction';

const BottomNavigationAction = (props: BottomNavigationActionProps) => (
  <BottomNavigationActionMui {...props} />
);

export { BottomNavigationAction };
export default BottomNavigationAction;
export * from '@mui/material/BottomNavigationAction';
