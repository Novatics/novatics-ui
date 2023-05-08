import MuiInputBase, { InputBaseProps } from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import { generateUtilityClass } from '@mui/material';
import FormLabel, { FormLabelBaseProps } from '@mui/material/FormLabel';
import FormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';

const getClassNameFromProps = (props: InputFieldProps) => {
  const classNames: string[] = [];

  if (props.size === 'large')
    classNames.push(generateUtilityClass('NuiInputField', 'sizeLarge'));

  if (props.className) {
    classNames.push(props.className);
  }

  return classNames.join(' ');
};

export type InputFieldProps = Omit<InputBaseProps, 'size' | 'error'> & {
  label?: FormLabelBaseProps['children'];
  hint?: FormHelperTextProps['children'];
  error?: boolean | FormHelperTextProps['children'];
  size?: InputBaseProps['size'] | 'large';
  withTextHelper?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const {
    label,
    error,
    required,
    hint,
    size,
    withTextHelper = true,
    ...other
  } = props;
  const className = getClassNameFromProps(props);

  let helperText = hint;

  if (error && typeof error != 'boolean') {
    helperText = error;
  }

  return (
    <FormControl>
      <FormLabel required={required} focused={false}>
        {label}
      </FormLabel>
      <MuiInputBase
        error={Boolean(error)}
        required={required}
        size={size === 'large' ? 'medium' : size}
        {...other}
        className={className}
      />
      {withTextHelper || helperText ? (
        <FormHelperText error={Boolean(error)} sx={{ minHeight: '17px' }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export { InputField };
export default InputField;
export * from '@mui/material/OutlinedInput';
