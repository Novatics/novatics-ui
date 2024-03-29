import ButtonMui, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export type ButtonProps = MUIButtonProps & {
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  loadingPosition?: 'start' | 'end' | 'center';
};

const Button = (props: ButtonProps) => {
  const {
    loading = false,
    loadingPosition = 'center',
    loadingIndicator,
    ...other
  } = props;

  const loadingProps = () => {
    if (!loading) return {};

    const iconIndicator = loadingIndicator ?? (
      <CircularProgress color="inherit" size={16} />
    );
    const iconPosition =
      loadingPosition === 'center' ? 'children' : loadingPosition + 'Icon';

    return {
      disabled: true,
      [iconPosition]: iconIndicator,
    };
  };

  return <ButtonMui {...other} {...loadingProps()} />;
};

export * from '@mui/material/Button';
export { Button };
export default Button;
