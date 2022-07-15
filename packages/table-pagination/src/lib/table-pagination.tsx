import TablePaginationMui, {
  TablePaginationProps,
} from '@mui/material/TablePagination';

const TablePagination = (props: TablePaginationProps) => (
  <TablePaginationMui {...props} />
);

export { TablePagination };
export default TablePagination;
export * from '@mui/material/TablePagination';
