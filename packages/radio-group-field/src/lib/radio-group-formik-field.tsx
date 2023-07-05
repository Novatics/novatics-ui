import { useCallback, useMemo } from 'react';
import { Field, FieldProps } from 'formik';

import { RadioGroupField, RadioGroupFieldProps } from './radio-group-field';

export type RadioGroupFormikFieldProps<T, U> = RadioGroupFieldProps &
  FieldProps<T, U>;

const RadioGroupFormikField = <T, U>(
  props: RadioGroupFormikFieldProps<T, U>,
) => {
  const internalValidate = useCallback(
    (value) => (props.required ? !value : false),
    [props.required],
  );

  const label = useMemo(
    () => (props.label ? props.label : props.name),
    [props.label, props.name],
  );

  return (
    <Field validate={internalValidate} {...props}>
      {({ field, form, meta }: FieldProps<boolean>) => {
        const hasError =
          (form.touched || meta.touched) &&
          (meta.error || Boolean(form.errors[field.name]));

        return (
          <RadioGroupField
            error={hasError}
            {...props}
            label={label}
            value={field.value}
            onChange={(event, value) => {
              field.onChange(event);
              props.onChange && props.onChange(event, value);
            }}
          />
        );
      }}
    </Field>
  );
};

export { RadioGroupFormikField };
export default RadioGroupFormikField;
