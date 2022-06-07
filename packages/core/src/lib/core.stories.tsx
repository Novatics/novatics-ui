import { Story, Meta } from '@storybook/react';
import { Core, CoreProps } from './core';

export default {
  component: Core,
  title: 'Core',
} as Meta;

const Template: Story<CoreProps> = (args) => <Core {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
