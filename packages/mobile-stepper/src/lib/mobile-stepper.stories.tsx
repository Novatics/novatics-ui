import { Story, Meta } from '@storybook/react';
import { MobileStepper, MobileStepperProps } from './mobile-stepper';

export default {
  component: MobileStepper,
  title: 'MobileStepper',
} as Meta;

const Template: Story<MobileStepperProps> = (args) => (
  <MobileStepper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
