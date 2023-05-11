import { Children, ReactElement, cloneElement, useMemo } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, ButtonProps } from '@novatics/button';
import { ActionFooter, ActionFooterProps } from '@novatics/action-footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from '@novatics/styles';

export type FromProps = StackProps & {
  title?: string | ReturnType<typeof Typography>;
  description?: string | ReturnType<typeof Typography>;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  onSubmit?: () => void;
  onReset?: () => void;
  onSubmitButtonProps?: ButtonProps;
  onResetButtonProps?: ButtonProps;
  buttonsPlacement?: ActionFooterProps['contentPosition'];
};

const useTextsFromProps = (props: FromProps) => {
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

const useButtonsFromProps = (props: FromProps) => {
  let onSubmitButton: ReturnType<typeof Button> | null = null;
  let onResetButton: ReturnType<typeof Button> | null = null;

  if (props.onSubmitButtonProps) {
    onSubmitButton = (
      <Button
        {...DEFAULT_SUBMIT_BUTTON_PROPS}
        onClick={props.onSubmit}
        disabled={props.disabled}
        loading={props.loading}
        {...props.onSubmitButtonProps}
      />
    );
  }

  if (props.onSubmitButtonProps) {
    onResetButton = (
      <Button
        {...DEFAULT_RESET_BUTTON_PROPS}
        onClick={props.onReset}
        {...props.onResetButtonProps}
      />
    );
  }

  return { onSubmitButton, onResetButton };
};

export const Form = (props: FromProps) => {
  const {
    onSubmit,
    onReset,
    children,
    loading,
    disabled: ownerDisabled,
    buttonsPlacement = 'end',
    ...other
  } = props;
  const { title, description } = useTextsFromProps(props);
  const { onSubmitButton, onResetButton } = useButtonsFromProps(props);
  const disabled = useMemo(
    () => ownerDisabled || loading,
    [loading, ownerDisabled]
  );

  const childrenArray = useMemo(() => {
    if (children) {
      return Children.toArray(children).map((child) =>
        typeof child === 'object'
          ? cloneElement(child as ReactElement, { loading, disabled })
          : child
      );
    }

    return [];
  }, [children, disabled, loading]);

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <Stack maxWidth="xs" spacing={2} {...other}>
        <Stack spacing={2} mb={2}>
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
export * from '@mui/material/Stack';
