import { Story, Meta } from '@storybook/react';
import { FormLabel, FormLabelProps } from './form-label';

export default {
  component: FormLabel,
  title: 'FormLabel',
} as Meta;

const Template: Story<FormLabelProps> = (args) => <FormLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
