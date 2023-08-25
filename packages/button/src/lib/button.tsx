import ButtonMui, {
  ButtonProps as MUIButtonProps,
} from '@mui/material/node/Button';
import CircularProgress from '@mui/material/node/CircularProgress';

export type ButtonProps = MUIButtonProps & {
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  loadingPosition?: 'start' | 'end' | 'center';
};

const Button = (props: ButtonProps) => {
  const { loading = false, loadingPosition = 'center' } = props;

  const loadingProps = () => {
    if (!loading) return {};

    const iconIndicator = props.loadingIndicator ?? (
      <CircularProgress color="inherit" size={16} />
    );
    const iconPosition =
      loadingPosition === 'center' ? 'children' : loadingPosition + 'Icon';

    return {
      disabled: true,
      [iconPosition]: iconIndicator,
    };
  };

  return <ButtonMui {...props} {...loadingProps()} />;
};

export { Button };
export default Button;
export * from '@mui/material/node/Button';
