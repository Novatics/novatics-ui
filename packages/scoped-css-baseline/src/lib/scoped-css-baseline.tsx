import ScopedCssBaselineMui, {
  ScopedCssBaselineProps,
} from '@mui/material/ScopedCssBaseline';

const ScopedCssBaseline = (props: ScopedCssBaselineProps) => (
  <ScopedCssBaselineMui {...props} />
);

export { ScopedCssBaseline };
export default ScopedCssBaseline;
export * from '@mui/material/ScopedCssBaseline';
