import { Story, Meta } from '@storybook/react';
import { PaginationItem, PaginationItemProps } from './pagination-item';

export default {
  component: PaginationItem,
  title: 'PaginationItem',
} as Meta;

const Template: Story<PaginationItemProps> = (args) => (
  <PaginationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
