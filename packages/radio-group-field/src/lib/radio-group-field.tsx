import MuiRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';
import { Radio } from '@novatics/radio';
import { styled } from '@novatics/styles';

export interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
  disabled?: boolean;
  loading?: boolean;
  error?: string | boolean;
  required?: boolean;
  hint?: FormHelperTextProps['children'];
  direction?: 'row' | 'column';
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  withTextHelper?: boolean;
}

const FormControl = styled(MuiFormControl)<{
  direction?: 'row' | 'column';
}>(({ direction }) => ({
  '.MuiFormGroup-root': {
    flexDirection: direction === 'row' ? 'row' : 'column',
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
  const {
    label,
    children,
    direction,
    required,
    options,
    disabled,
    loading,
    hint,
    error,
    labelPlacement = 'end',
    withTextHelper = true,
    ...others
  } = props;

  const disableRadio = disabled || loading;

  let helperText = hint;

  if (error && typeof error != 'boolean') {
    helperText = error;
  }

  return (
    <FormControl direction={direction} required={required}>
      {label && <MuiFormLabel>{label}</MuiFormLabel>}
      <MuiRadioGroup {...others}>
        {options?.map((option) => (
          <MuiFormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            labelPlacement={labelPlacement}
            disabled={option.disabled || disableRadio}
          />
        ))}
        {children}
      </MuiRadioGroup>
      {withTextHelper || helperText ? (
        <FormHelperText error={Boolean(error)} sx={{ minHeight: '17px' }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export { RadioGroupField };
export default RadioGroupField;
export * from '@mui/material/RadioGroup';
