import { Story, Meta } from '@storybook/react';
import { MenuList, MenuListProps } from './menu-list';

export default {
  component: MenuList,
  title: 'MenuList',
} as Meta;

const Template: Story<MenuListProps> = (args) => <MenuList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
