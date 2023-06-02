import MuiRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@novatics/radio';
import { styled } from '@novatics/styles';

export interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
  disabled?: boolean;
  loading?: boolean;
  error?: string | boolean;
  required?: boolean;
}

const FormControl = styled(MuiFormControl)<RadioGroupProps>(() => ({
  '.MuiFormGroup-root': {
    flexDirection: 'row',
    gap: '0 24px',
  },
  '.MuiFormLabel-root': {
    fontWeight: '600',
    letterSpacing: '1.25px',
  },
  '.MuiFormControlLabel-root': {
    margin: '8px 0',
  },
  '.MuiFormControlLabel-label': {
    marginLeft: '4px',
    marginRight: '4px',
  },
}));

const RadioGroupField = (props: RadioGroupFieldProps) => {
  const { label, children, options, disabled, loading, ...others } = props;

  const disableRadio = disabled || loading;

  return (
    <FormControl required={props.required}>
      {label && <MuiFormLabel>{label}</MuiFormLabel>}
      <MuiRadioGroup {...others}>
        {options?.map((option) => (
          <MuiFormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={option.disabled || disableRadio}
          />
        ))}
        {children}
      </MuiRadioGroup>
    </FormControl>
  );
};

export { RadioGroupField };
export default RadioGroupField;
export * from '@mui/material/RadioGroup';
