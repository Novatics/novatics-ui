import { FormControl, FormLabel } from '@mui/material';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface SelectFieldProps extends Omit<SelectProps, 'error'> {
  label?: string;
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
  disabled?: boolean;
  loading?: boolean;
  error?: string | boolean;
  required?: boolean;
}

const SelectField = (props: SelectFieldProps) => {
  const { label, required, error, disabled, loading, ...others } = props;

  const disableSelect = disabled || loading;

  return (
    <FormControl>
      <FormLabel required={required} focused={false}>
        {label}
      </FormLabel>
      <MuiSelect IconComponent={ExpandMoreIcon} disabled={disableSelect} error={Boolean(error)} {...others} />
    </FormControl>
  );
};

export { SelectField };
export default SelectField;
export * from '@mui/material/Select';
