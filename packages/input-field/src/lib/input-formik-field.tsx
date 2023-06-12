import { useCallback, useMemo } from 'react';
import { Field, FieldProps } from 'formik';

import { InputField, InputFieldProps } from './input-field';

export type InputFormikFieldProps<T, U> = InputFieldProps & FieldProps<T, U>;

const InputFormikField = <T, U>(props: InputFormikFieldProps<T, U>) => {
  const internalValidate = useCallback(
    (value) => (props.required ? !value : false),
    [props.required]
  );

  const label = useMemo(
    () => (props.label ? props.label : props.name),
    [props.label, props.name]
  );

  return (
    <Field validate={internalValidate} {...props}>
      {(p: FieldProps<boolean>) => {
        const { field, form, meta } = p;
        const hasError =
          (form.touched || meta.touched) &&
          (meta.error || Boolean(form.errors[field.name]));

        return (
          <InputField
            {...props}
            error={hasError}
            label={label}
            value={field.value}
            onChange={(event) => {
              field.onChange(event);
              props.onChange && props.onChange(event);
            }}
          />
        );
      }}
    </Field>
  );
};

export { InputFormikField };
export default InputFormikField;
