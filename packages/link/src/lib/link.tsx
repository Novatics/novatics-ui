import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export type LinkProps = MUILinkProps & {
  isExternal?: boolean;
};

export const Link = (props: LinkProps) => {
  const { isExternal = false, underline = 'none', children, ...other } = props;

  return (
    <MUILink underline={underline} {...other}>
      {children}
      {isExternal ? <span> ↗</span> : ''}
    </MUILink>
  );
};

export default Link;
