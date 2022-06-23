import { Story, Meta } from '@storybook/react';
import { StepContent, StepContentProps } from './step-content';

export default {
  component: StepContent,
  title: 'StepContent',
} as Meta;

const Template: Story<StepContentProps> = (args) => <StepContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
