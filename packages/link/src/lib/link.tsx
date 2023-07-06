import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export interface LinkProps extends MUILinkProps {
  showIcon?: boolean;
}

export function Link({ children }, props: LinkProps) {
  const { showIcon = true } = props;

  return (
    <MUILink {...props} underline="none" href="#" variant={props.variant}>
      {children}
      {showIcon ?? <span className="">↗</span>}
    </MUILink>
  );
}

export default Link;
