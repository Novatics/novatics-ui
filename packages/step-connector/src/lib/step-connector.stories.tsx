import { Story, Meta } from '@storybook/react';
import { StepConnector, StepConnectorProps } from './step-connector';

export default {
  component: StepConnector,
  title: 'StepConnector',
} as Meta;

const Template: Story<StepConnectorProps> = (args) => (
  <StepConnector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
