import { Story, Meta } from '@storybook/react';
import { BottomNavigation, BottomNavigationProps } from './bottom-navigation';

export default {
  component: BottomNavigation,
  title: 'BottomNavigation',
} as Meta;

const Template: Story<BottomNavigationProps> = (args) => (
  <BottomNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
