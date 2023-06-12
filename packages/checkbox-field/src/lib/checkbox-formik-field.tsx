import { useCallback, useMemo } from 'react';
import { Field, FieldProps } from 'formik';

import { CheckboxField, CheckboxFieldProps } from './checkbox-field';

export type CheckboxFormikFieldProps<T, U> = CheckboxFieldProps &
  FieldProps<T, U>;

const CheckboxFormikField = <T, U>(props: CheckboxFormikFieldProps<T, U>) => {
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
      {({ field, form, meta }: FieldProps<boolean>) => {
        const hasError =
          (form.touched || meta.touched) &&
          (meta.error || Boolean(form.errors[field.name]));

        return (
          <CheckboxField
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

export { CheckboxFormikField };
export default CheckboxFormikField;
