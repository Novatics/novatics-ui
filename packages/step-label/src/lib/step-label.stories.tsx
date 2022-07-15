import { Story, Meta } from '@storybook/react';
import { StepLabel, StepLabelProps } from './step-label';

export default {
  component: StepLabel,
  title: 'StepLabel',
} as Meta;

const Template: Story<StepLabelProps> = (args) => <StepLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
