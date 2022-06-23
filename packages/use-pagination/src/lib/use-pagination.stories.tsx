import { Story, Meta } from '@storybook/react';
import { UsePagination, UsePaginationProps } from './use-pagination';

export default {
  component: UsePagination,
  title: 'UsePagination',
} as Meta;

const Template: Story<UsePaginationProps> = (args) => (
  <UsePagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
