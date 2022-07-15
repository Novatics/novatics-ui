import { Story, Meta } from '@storybook/react';
import { FilledInput, FilledInputProps } from './filled-input';

export default {
  component: FilledInput,
  title: 'FilledInput',
} as Meta;

const Template: Story<FilledInputProps> = (args) => <FilledInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
