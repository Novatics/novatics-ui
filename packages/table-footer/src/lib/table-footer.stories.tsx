import { Story, Meta } from '@storybook/react';
import { TableFooter, TableFooterProps } from './table-footer';

export default {
  component: TableFooter,
  title: 'TableFooter',
} as Meta;

const Template: Story<TableFooterProps> = (args) => <TableFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
