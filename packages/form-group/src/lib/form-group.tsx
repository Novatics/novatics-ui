import { Stack, Typography } from '@mui/material';
import MuiFormGroup, {
  FormGroupProps as MUIFormGroupProps,
} from '@mui/material/FormGroup';
import { Children, ReactElement, cloneElement, useMemo } from 'react';

export type FormGroupProps = Omit<MUIFormGroupProps, 'children'> & {
  title?: string;
  direction?: 'row' | 'column';
  titleSpacing?: number;
  childrenSpacing?: number;
  loading?: boolean;
  disabled?: boolean;
  children?: (() => React.ReactNode) | React.ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  const {
    title,
    direction = 'column',
    titleSpacing = 2.5,
    childrenSpacing = 2.5,
    children,
    loading,
    disabled,
    ...others
  } = props;

  const childrenArray = useMemo(() => {
    if (children) {
      const executedChildren =
        typeof children === 'function' ? children() : children;

      return Children.toArray(executedChildren).map((child) => {
        return typeof child === 'object'
          ? cloneElement(child as ReactElement, {
              loading,
              disabled,
              direction,
            })
          : child;
      });
    }

    return [];
  }, [children, direction, disabled, loading]);

  return (
    <Stack spacing={titleSpacing}>
      {title && (
        <Typography variant="h5" fontWeight="500">
          {title}
        </Typography>
      )}
      <MuiFormGroup
        sx={{ gap: childrenSpacing }}
        row={direction === 'row'}
        {...others}
      ></MuiFormGroup>
      {childrenArray}
    </Stack>
  );
};

export { FormGroup };
export default FormGroup;
export * from '@mui/material/FormGroup';
