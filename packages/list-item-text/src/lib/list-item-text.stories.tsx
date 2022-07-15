import { Story, Meta } from '@storybook/react';
import { ListItemText, ListItemTextProps } from './list-item-text';

export default {
  component: ListItemText,
  title: 'ListItemText',
} as Meta;

const Template: Story<ListItemTextProps> = (args) => <ListItemText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
