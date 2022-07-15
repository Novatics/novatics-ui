import { Story, Meta } from '@storybook/react';
import { SpeedDial, SpeedDialProps } from './speed-dial';

export default {
  component: SpeedDial,
  title: 'SpeedDial',
} as Meta;

const Template: Story<SpeedDialProps> = (args) => <SpeedDial {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
