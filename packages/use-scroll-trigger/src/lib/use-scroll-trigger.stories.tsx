import { Story, Meta } from '@storybook/react';
import { UseScrollTrigger, UseScrollTriggerProps } from './use-scroll-trigger';

export default {
  component: UseScrollTrigger,
  title: 'UseScrollTrigger',
} as Meta;

const Template: Story<UseScrollTriggerProps> = (args) => (
  <UseScrollTrigger {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
