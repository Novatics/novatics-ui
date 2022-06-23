import StyledEngineProviderMui, {
  StyledEngineProviderProps,
} from '@mui/material/StyledEngineProvider';

const StyledEngineProvider = (props: StyledEngineProviderProps) => (
  <StyledEngineProviderMui {...props} />
);

export { StyledEngineProvider };
export default StyledEngineProvider;
export * from '@mui/material/StyledEngineProvider';
