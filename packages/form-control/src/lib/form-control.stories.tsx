import { Story, Meta } from '@storybook/react';
import { FormControl, FormControlProps } from './form-control';

export default {
  component: FormControl,
  title: 'FormControl',
} as Meta;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
