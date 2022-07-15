import { Story, Meta } from '@storybook/react';
import { ListItem, ListItemProps } from './list-item';

export default {
  component: ListItem,
  title: 'ListItem',
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
