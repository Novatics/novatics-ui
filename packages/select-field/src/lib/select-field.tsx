import { FormControl, FormLabel } from '@mui/material';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SelectField = (props: SelectProps) => {
  const { label, required, ...others } = props;
  return (
    <FormControl>
      <FormLabel required={required} focused={false}>
        {label}
      </FormLabel>
      <MuiSelect IconComponent={ExpandMoreIcon} {...others} />
    </FormControl>
  );
};

export { SelectField };
export default SelectField;
export * from '@mui/material/Select';
