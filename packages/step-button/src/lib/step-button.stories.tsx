import { Story, Meta } from '@storybook/react';
import { StepButton, StepButtonProps } from './step-button';

export default {
  component: StepButton,
  title: 'StepButton',
} as Meta;

const Template: Story<StepButtonProps> = (args) => <StepButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
