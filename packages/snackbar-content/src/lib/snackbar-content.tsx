import SnackbarContentMui, {
  SnackbarContentProps,
} from '@mui/material/SnackbarContent';

const SnackbarContent = (props: SnackbarContentProps) => (
  <SnackbarContentMui {...props} />
);

export { SnackbarContent };
export default SnackbarContent;
export * from '@mui/material/SnackbarContent';
