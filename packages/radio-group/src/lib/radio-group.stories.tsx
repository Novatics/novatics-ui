import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from './radio-group';

export default {
  component: RadioGroup,
  title: 'RadioGroup',
} as Meta;

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
