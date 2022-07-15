import { Story, Meta } from '@storybook/react';
import { TableHead, TableHeadProps } from './table-head';

export default {
  component: TableHead,
  title: 'TableHead',
} as Meta;

const Template: Story<TableHeadProps> = (args) => <TableHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
