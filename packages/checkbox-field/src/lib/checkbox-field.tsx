import Checkbox, { CheckboxProps } from '@novatics-ui/checkbox';
import FormControl from '@mui/material/FormControl';
import { styled, useTheme } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  '&.MuiFormControlLabel-root': {
    margin: 0,
  },
}));

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
  const labelPadding = {
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
  };

  if (props.required) {
    if (props.labelPlacement === 'start') {
      labelPadding.paddingLeft = '0px';
    } else {
      labelPadding.paddingRight = '0px';
    }
  }

  return (
    <FormControl>
      <FormControlLabel
        {...props}
        control={<Checkbox color={color} {...props} />}
        slotProps={{
          ...props.slotProps,
          typography: {
            color: hasError ? theme.palette.error.main : undefined,
            ...typographyOverride,
            ...labelPadding,
            ...props.slotProps?.typography,
          },
        }}
      />
    </FormControl>
  );
};

export { CheckboxField };
export default CheckboxField;
