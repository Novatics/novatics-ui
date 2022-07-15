import { Story, Meta } from '@storybook/react';
import { Table, TableProps } from './table';

export default {
  component: Table,
  title: 'Table',
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
