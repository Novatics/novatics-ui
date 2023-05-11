import { Typography } from '@mui/material';
import MuiFormGroup, {
  FormGroupProps as MUIFormGroupProps,
} from '@mui/material/FormGroup';

export interface FormGroupProps extends MUIFormGroupProps {
  title?: string;
  direction: 'row' | 'column';
}

const FormGroup = (props: FormGroupProps) => {
  const { title, direction = 'column' } = props;

  return (
    <>
      {title && (
        <Typography sx={{ mb: 2.5 }} variant="h5" fontWeight="500">
          {title}
        </Typography>
      )}
      <MuiFormGroup sx={{ gap: 2.5 }} row={direction === 'row'} {...props} />
    </>
  );
};

export { FormGroup };
export default FormGroup;
export * from '@mui/material/FormGroup';
