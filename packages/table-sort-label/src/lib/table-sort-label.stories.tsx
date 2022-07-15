import { Story, Meta } from '@storybook/react';
import { TableSortLabel, TableSortLabelProps } from './table-sort-label';

export default {
  component: TableSortLabel,
  title: 'TableSortLabel',
} as Meta;

const Template: Story<TableSortLabelProps> = (args) => (
  <TableSortLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
