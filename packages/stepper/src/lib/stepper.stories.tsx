import { Story, Meta } from '@storybook/react';
import { Stepper, StepperProps } from './stepper';

export default {
  component: Stepper,
  title: 'Stepper',
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
