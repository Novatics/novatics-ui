import { useRef } from 'react';
import { Formik, FormikConfig, FormikProps, FormikValues } from 'formik';
import isEmpty from 'lodash.isempty';

import { Form, BaseFormProps } from './form';

export type ScrollOnErrorProps = ScrollToOptions & {
  useParent: boolean;
  errorQuerySelector: string;
};

export type FormikFormProps<T extends FormikValues = FormikValues> = Omit<
  BaseFormProps,
  'children'
> &
  FormikConfig<T> & {
    children: (props: FormikProps<T>) => React.ReactNode;
    scrollOnError?: boolean | Partial<ScrollOnErrorProps>;
  };

const MUI_ERROR_QUERY_SELECTOR = '.Mui-error';

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

const useScrollOnErrorProps = <T extends FormikValues = FormikValues>({
  scrollOnError = false,
}: FormikFormProps<T>) => {
  if (scrollOnError === false) return {} as ScrollOnErrorProps;

  let scrollOnErrorProps = {
    errorQuerySelector: MUI_ERROR_QUERY_SELECTOR,
    behavior: 'smooth',
    useParent: true,
  };

  if (typeof scrollOnError === 'object') {
    scrollOnErrorProps = { ...scrollOnErrorProps, ...scrollOnError };
  }

  return scrollOnErrorProps as ScrollOnErrorProps;
};

export const FormikForm = <T extends FormikValues = FormikValues>(
  props: FormikFormProps<T>
) => {
  const {
    children,
    validateOnBlur = false,
    validateOnChange = false,
    validateOnMount = false,
    ...other
  } = props;
  const innerFormRef = useRef<HTMLUListElement>();
  const formProps = useFormProps(props);
  const scrollOnErrorProps = useScrollOnErrorProps(props);

  return (
    <Formik
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validateOnMount={validateOnMount}
      {...other}
    >
      {(formikProps) => {
        const { errors } = formikProps;
        const shouldScroll = !isEmpty(scrollOnErrorProps) && !isEmpty(errors);
        const formIsMounted = Boolean(innerFormRef.current);
        const querySelector =
          scrollOnErrorProps.errorQuerySelector || MUI_ERROR_QUERY_SELECTOR;

        if (shouldScroll && formIsMounted) {
          const firstElementErr =
            innerFormRef.current?.querySelector(querySelector);

          if (firstElementErr) {
            const element =
              scrollOnErrorProps.useParent && firstElementErr.parentElement
                ? firstElementErr.parentElement
                : firstElementErr;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: scrollOnErrorProps.behavior,
            });
          }
        }

        return (
          <Form
            {...formProps}
            ref={innerFormRef}
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
