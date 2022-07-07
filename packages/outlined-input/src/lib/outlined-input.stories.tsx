import { Story, Meta } from '@storybook/react';
import { OutlinedInput, OutlinedInputProps } from './outlined-input';

export default {
  component: OutlinedInput,
  title: 'OutlinedInput',
} as Meta;

const Template: Story<OutlinedInputProps> = (args) => (
  <OutlinedInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
