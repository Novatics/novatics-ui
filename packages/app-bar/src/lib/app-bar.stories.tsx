import { Story, Meta } from '@storybook/react';
import { AppBar, AppBarProps } from './app-bar';

export default {
  component: AppBar,
  title: 'AppBar',
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
