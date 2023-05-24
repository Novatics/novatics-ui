import MuiRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@novatics/radio';

interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
}

const RadioGroupField = (props: RadioGroupFieldProps) => {
  const { label, children, options, ...others } = props;
  return (
    <MuiFormControl>
      <MuiFormLabel>{label}</MuiFormLabel>
      <MuiRadioGroup {...others}>
        {options?.map((option) => (
          <MuiFormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
        {children}
      </MuiRadioGroup>
    </MuiFormControl>
  );
};

export { RadioGroupField };
export default RadioGroupField;
export * from '@mui/material/RadioGroup';
