import { Stack, Typography } from '@mui/material';
import MuiFormGroup, {
  FormGroupProps as MUIFormGroupProps,
} from '@mui/material/FormGroup';

export interface FormGroupProps extends MUIFormGroupProps {
  title?: string;
  direction?: 'row' | 'column';
  titleSpacing?: number;
  childrenSpacing?: number;
}

const FormGroup = (props: FormGroupProps) => {
  const {
    title,
    direction = 'column',
    titleSpacing = 2.5,
    childrenSpacing = 2.5,
  } = props;
  console.log('props', props);

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
        {...props}
      />
    </Stack>
  );
};

export { FormGroup };
export default FormGroup;
export * from '@mui/material/FormGroup';
