import { Story, Meta } from '@storybook/react';
import { TableBody, TableBodyProps } from './table-body';

export default {
  component: TableBody,
  title: 'TableBody',
} as Meta;

const Template: Story<TableBodyProps> = (args) => <TableBody {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
