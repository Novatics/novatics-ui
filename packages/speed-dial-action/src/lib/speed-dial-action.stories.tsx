import { Story, Meta } from '@storybook/react';
import { SpeedDialAction, SpeedDialActionProps } from './speed-dial-action';

export default {
  component: SpeedDialAction,
  title: 'SpeedDialAction',
} as Meta;

const Template: Story<SpeedDialActionProps> = (args) => (
  <SpeedDialAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
