import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './menu';

export default {
  component: Menu,
  title: 'Menu',
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
