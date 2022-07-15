import { Story, Meta } from '@storybook/react';
import { InputAdornment, InputAdornmentProps } from './input-adornment';

export default {
  component: InputAdornment,
  title: 'InputAdornment',
} as Meta;

const Template: Story<InputAdornmentProps> = (args) => (
  <InputAdornment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
