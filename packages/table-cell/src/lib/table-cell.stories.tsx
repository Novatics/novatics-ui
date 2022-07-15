import { Story, Meta } from '@storybook/react';
import { TableCell, TableCellProps } from './table-cell';

export default {
  component: TableCell,
  title: 'TableCell',
} as Meta;

const Template: Story<TableCellProps> = (args) => <TableCell {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
