import { Story, Meta } from '@storybook/react';
import { ListItemButton, ListItemButtonProps } from './list-item-button';

export default {
  component: ListItemButton,
  title: 'ListItemButton',
} as Meta;

const Template: Story<ListItemButtonProps> = (args) => (
  <ListItemButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
