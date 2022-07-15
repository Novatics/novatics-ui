import { Story, Meta } from '@storybook/react';
import { ListItemIcon, ListItemIconProps } from './list-item-icon';

export default {
  component: ListItemIcon,
  title: 'ListItemIcon',
} as Meta;

const Template: Story<ListItemIconProps> = (args) => <ListItemIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
