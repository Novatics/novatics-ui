import UseAutocompleteMui, {
  UseAutocompleteProps,
} from '@mui/material/UseAutocomplete';

const UseAutocomplete = (props: UseAutocompleteProps) => (
  <UseAutocompleteMui {...props} />
);

export { UseAutocomplete };
export default UseAutocomplete;
export * from '@mui/material/UseAutocomplete';
