import { Story, Meta } from '@storybook/react';
import { ListItemAvatar, ListItemAvatarProps } from './list-item-avatar';

export default {
  component: ListItemAvatar,
  title: 'ListItemAvatar',
} as Meta;

const Template: Story<ListItemAvatarProps> = (args) => (
  <ListItemAvatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
