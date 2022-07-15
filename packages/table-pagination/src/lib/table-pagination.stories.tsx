import { Story, Meta } from '@storybook/react';
import { TablePagination, TablePaginationProps } from './table-pagination';

export default {
  component: TablePagination,
  title: 'TablePagination',
} as Meta;

const Template: Story<TablePaginationProps> = (args) => (
  <TablePagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
