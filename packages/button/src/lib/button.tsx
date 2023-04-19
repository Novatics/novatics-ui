import ButtonMui, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonProps extends MUIButtonProps {}

const Button = (props: ButtonProps) => <ButtonMui {...props} />;

export { Button };
export default Button;
export * from '@mui/material/Button';
