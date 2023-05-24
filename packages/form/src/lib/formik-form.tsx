import { Formik, FormikConfig, FormikProps, FormikValues } from 'formik';

import { Form, BaseFormProps } from './form';

export type FormikFormProps<T extends FormikValues = FormikValues> = Omit<
  BaseFormProps,
  'children'
> &
  FormikConfig<T> & {
    children: (props: FormikProps<T>) => React.ReactNode;
  };

const useFormProps = <T extends FormikValues = FormikValues>(
  props: FormikFormProps<T>
) => {
  const {
    title,
    description,
    loading,
    disabled,
    submitButtonProps,
    resetButtonProps,
    buttonsPlacement,
  } = props;

  return {
    title,
    description,
    loading,
    disabled,
    submitButtonProps,
    resetButtonProps,
    buttonsPlacement,
  };
};

export const FormikForm = <T extends FormikValues = FormikValues>(
  props: FormikFormProps<T>
) => {
  const { children, ...other } = props;
  const formProps = useFormProps(props);
  return (
    <Formik {...other}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form
            {...formProps}
            handleSubmit={formikProps.handleSubmit}
            handleReset={formikProps.handleReset}
          >
            {children(formikProps)}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
