import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface CheckboxProps extends FormControlLabelProps {
  CheckboxProps: MuiCheckboxProps;
  disabled?: boolean;
}

// TODO Label will always be to the right of the checkbox
export function Checkbox({ CheckboxProps, ...props }: CheckboxProps) {
  return (
    <FormControlLabel
      {...props}
      control={
        <MuiCheckbox {...CheckboxProps}
          sx={{
            // '&:hover': {
            //   bgcolor: 'transparent',
            // },
          }}
        />}
    />
  );
}

export default Checkbox;
