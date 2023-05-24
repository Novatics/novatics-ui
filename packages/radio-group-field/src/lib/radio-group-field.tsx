import MuiRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

interface RadioGroupFieldProps extends RadioGroupProps {}

const RadioGroupField = (props: RadioGroupFieldProps) => (
  <MuiRadioGroup {...props} />
);

export { RadioGroupField };
export default RadioGroupField;
export * from '@mui/material/RadioGroup';
