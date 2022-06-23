import { Story, Meta } from '@storybook/react';
import { LinearProgress, LinearProgressProps } from './linear-progress';

export default {
  component: LinearProgress,
  title: 'LinearProgress',
} as Meta;

const Template: Story<LinearProgressProps> = (args) => (
  <LinearProgress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
