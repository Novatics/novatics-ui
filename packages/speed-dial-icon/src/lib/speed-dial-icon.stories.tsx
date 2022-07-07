import { Story, Meta } from '@storybook/react';
import { SpeedDialIcon, SpeedDialIconProps } from './speed-dial-icon';

export default {
  component: SpeedDialIcon,
  title: 'SpeedDialIcon',
} as Meta;

const Template: Story<SpeedDialIconProps> = (args) => (
  <SpeedDialIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
