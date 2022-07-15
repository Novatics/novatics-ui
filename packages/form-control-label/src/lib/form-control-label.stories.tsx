import { Story, Meta } from '@storybook/react';
import { FormControlLabel, FormControlLabelProps } from './form-control-label';

export default {
  component: FormControlLabel,
  title: 'FormControlLabel',
} as Meta;

const Template: Story<FormControlLabelProps> = (args) => (
  <FormControlLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
