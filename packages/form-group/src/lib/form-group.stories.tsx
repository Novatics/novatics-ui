import { Story, Meta } from '@storybook/react';
import { FormGroup, FormGroupProps } from './form-group';

export default {
  component: FormGroup,
  title: 'FormGroup',
} as Meta;

const Template: Story<FormGroupProps> = (args) => <FormGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
