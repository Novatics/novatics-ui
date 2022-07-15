import { Story, Meta } from '@storybook/react';
import { TextField, TextFieldProps } from './text-field';

export default {
  component: TextField,
  title: 'TextField',
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
