import { Story, Meta } from '@storybook/react';
import { TableRow, TableRowProps } from './table-row';

export default {
  component: TableRow,
  title: 'TableRow',
} as Meta;

const Template: Story<TableRowProps> = (args) => <TableRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
