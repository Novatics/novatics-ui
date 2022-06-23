import { Story, Meta } from '@storybook/react';
import { UseTouchRipple, UseTouchRippleProps } from './use-touch-ripple';

export default {
  component: UseTouchRipple,
  title: 'UseTouchRipple',
} as Meta;

const Template: Story<UseTouchRippleProps> = (args) => (
  <UseTouchRipple {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
