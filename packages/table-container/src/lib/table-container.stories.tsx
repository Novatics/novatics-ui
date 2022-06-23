import { Story, Meta } from '@storybook/react';
import { TableContainer, TableContainerProps } from './table-container';

export default {
  component: TableContainer,
  title: 'TableContainer',
} as Meta;

const Template: Story<TableContainerProps> = (args) => (
  <TableContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
