import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
