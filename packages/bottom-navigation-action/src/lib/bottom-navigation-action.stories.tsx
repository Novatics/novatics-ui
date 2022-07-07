import { Story, Meta } from '@storybook/react';
import {
  BottomNavigationAction,
  BottomNavigationActionProps,
} from './bottom-navigation-action';

export default {
  component: BottomNavigationAction,
  title: 'BottomNavigationAction',
} as Meta;

const Template: Story<BottomNavigationActionProps> = (args) => (
  <BottomNavigationAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
