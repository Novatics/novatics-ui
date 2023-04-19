import Checkbox, { CheckboxProps } from '@novatics/checkbox';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import MuiFormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const FormHelperText = styled(MuiFormHelperText)(({ theme }) => ({}));

export type CheckboxFieldProps = FormControlLabelProps &
  CheckboxProps & {
    typography: Extract<TypographyProps['variant'], 'bodySmall' | 'body'>;
    error?: string | boolean;
    hint?: string;
  };

const CheckboxField = (props: CheckboxFieldProps) => {
  const theme = useTheme();

  const typographyVariant = props.typography as TypographyProps['variant'];
  const typographyOverride = typographyVariant
    ? theme.typography[typographyVariant]
    : undefined;

  const hasError = Boolean(props.error);
  const color = hasError ? 'error' : undefined;

  const hint =
    hasError && typeof props.error === 'string' ? props.error : props.hint;

  return (
    <FormControl>
      <FormControlLabel
        {...props}
        control={<Checkbox {...props} color={color} />}
        slotProps={{
          ...props.slotProps,
          typography: {
            ...typographyOverride,
            paddingRight: theme.spacing(0.5),
            paddingLeft: theme.spacing(0.5),
            ...props.slotProps?.typography,
          },
        }}
      />
      {hint ? <FormHelperText error={hasError}>{hint}</FormHelperText> : null}
    </FormControl>
  );
};

export { CheckboxField };
export default CheckboxField;
export * from '@mui/material/Checkbox';
