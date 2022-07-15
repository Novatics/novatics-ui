import { Story, Meta } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './toggle-button';

export default {
  component: ToggleButton,
  title: 'ToggleButton',
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
