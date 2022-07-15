import { Story, Meta } from '@storybook/react';
import { Step, StepProps } from './step';

export default {
  component: Step,
  title: 'Step',
} as Meta;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
