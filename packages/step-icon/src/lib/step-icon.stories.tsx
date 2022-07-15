import { Story, Meta } from '@storybook/react';
import { StepIcon, StepIconProps } from './step-icon';

export default {
  component: StepIcon,
  title: 'StepIcon',
} as Meta;

const Template: Story<StepIconProps> = (args) => <StepIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
