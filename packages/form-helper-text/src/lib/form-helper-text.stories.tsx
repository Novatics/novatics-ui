import { Story, Meta } from '@storybook/react';
import { FormHelperText, FormHelperTextProps } from './form-helper-text';

export default {
  component: FormHelperText,
  title: 'FormHelperText',
} as Meta;

const Template: Story<FormHelperTextProps> = (args) => (
  <FormHelperText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
