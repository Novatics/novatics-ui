import PaginationItemMui, {
  PaginationItemProps,
} from '@mui/material/PaginationItem';

const PaginationItem = (props: PaginationItemProps) => (
  <PaginationItemMui {...props} />
);

export { PaginationItem };
export default PaginationItem;
export * from '@mui/material/PaginationItem';
