import GlobalStylesMui, { GlobalStylesProps } from '@mui/material/GlobalStyles';

const GlobalStyles = (props: GlobalStylesProps) => (
  <GlobalStylesMui {...props} />
);

export { GlobalStyles };
export default GlobalStyles;
export * from '@mui/material/GlobalStyles';
