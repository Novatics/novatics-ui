import {
  Children,
  ReactElement,
  cloneElement,
  useMemo,
  FormEvent,
  SyntheticEvent,
} from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, ButtonProps } from '@novatics/button';
import { ActionFooter, ActionFooterProps } from '@novatics/action-footer';
import {
  Formik,
  FormikConfig,
  FormikProps,
  useFormik,
  FormikValues,
} from 'formik';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from '@novatics/styles';

export type BaseFormProps = Pick<StackProps, 'sx' | 'direction'> & {
  title?: string | ReturnType<typeof Typography> | null;
  description?: string | ReturnType<typeof Typography> | null;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  handleSubmit?: (e?: FormEvent<HTMLFormElement>) => void;
  handleReset?: (e?: SyntheticEvent<any>) => void;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  buttonsPlacement?: ActionFooterProps['contentPosition'];
  children?: (() => React.ReactNode) | React.ReactNode;
  slots?: {
    stack?: {
      props: StackProps;
    };
  };
};

export type FormProps<T> = Partial<FormikProps<T>> & BaseFormProps;

const useTextsFormProps = <T,>(props: FormProps<T>) => {
  let title: ReturnType<typeof Typography> = null;
  let description: ReturnType<typeof Typography> = null;

  if (props.title) {
    if (typeof props.title === 'string') {
      title = <Typography variant="h4">{props.title}</Typography>;
    } else {
      title = props.title;
    }
  }
  if (props.description) {
    if (typeof props.description === 'string') {
      description = <Typography variant="body">{props.description}</Typography>;
    } else {
      description = props.description;
    }
  }

  return { title, description };
};

const DEFAULT_SUBMIT_BUTTON_PROPS: ButtonProps = {
  children: 'Submit',
  type: 'submit',
  variant: 'contained',
};

const DEFAULT_RESET_BUTTON_PROPS: ButtonProps = {
  children: 'Cancel',
  type: 'reset',
  variant: 'outlined',
};

const useButtonsFormProps = <T,>(props: FormProps<T>) => {
  let onSubmitButton: ReturnType<typeof Button> | null = null;
  let onResetButton: ReturnType<typeof Button> | null = null;

  if (props.submitButtonProps) {
    onSubmitButton = (
      <Button
        {...DEFAULT_SUBMIT_BUTTON_PROPS}
        onClick={(e) =>
          props.handleSubmit &&
          props.handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
        }
        disabled={props.disabled}
        loading={props.loading}
        {...props.submitButtonProps}
      />
    );
  }

  if (props.resetButtonProps) {
    onResetButton = (
      <Button
        {...DEFAULT_RESET_BUTTON_PROPS}
        onClick={(e) => props.handleReset && props.handleReset(e)}
        {...props.resetButtonProps}
      />
    );
  }

  return { onSubmitButton, onResetButton };
};

const useStackPropsFromSlots = <T,>(props: FormProps<T>) => {
  if (props.slots?.stack) {
    return props.slots?.stack;
  }

  return {};
};

export const Form = <T,>(props: FormProps<T>) => {
  const {
    handleSubmit,
    handleReset,
    children,
    loading,
    disabled: ownerDisabled,
    direction,
    buttonsPlacement = 'end',
    sx,
  } = props;
  const stackProps = useStackPropsFromSlots(props);
  const { title, description } = useTextsFormProps(props);
  const { onSubmitButton, onResetButton } = useButtonsFormProps(props);
  const disabled = useMemo(
    () => ownerDisabled || loading,
    [loading, ownerDisabled]
  );

  const childrenArray = useMemo(() => {
    if (children) {
      console.log(children, typeof children === 'function');
      const executedChildren =
        typeof children === 'function' ? children() : children;
      console.log(executedChildren, props);

      return Children.toArray(executedChildren).map((child) => {
        console.log('child', typeof child === 'object', child);
        return typeof child === 'object'
          ? cloneElement(child as ReactElement, {
              loading,
              disabled,
            })
          : child;
      });
    }

    return [];
  }, [children, disabled, loading, props]);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Stack
        spacing={2}
        sx={{ maxWidth: 'xs', ...sx }}
        direction={direction}
        {...stackProps}
      >
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          {title}
          {description}
        </Stack>
        {childrenArray}
        {onSubmitButton || onResetButton ? (
          <ActionFooter contentPosition={buttonsPlacement} spacing={1}>
            {onResetButton}
            {onSubmitButton}
          </ActionFooter>
        ) : null}
      </Stack>
    </form>
  );
};

export default Form;
