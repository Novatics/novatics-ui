import { Story, Meta } from '@storybook/react';
import { Stack, StackProps } from './stack';

export default {
  component: Stack,
  title: 'Stack',
} as Meta;

const Template: Story<StackProps> = (args) => <Stack {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
