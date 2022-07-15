import { Story, Meta } from '@storybook/react';
import {
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from './toggle-button-group';

export default {
  component: ToggleButtonGroup,
  title: 'ToggleButtonGroup',
} as Meta;

const Template: Story<ToggleButtonGroupProps> = (args) => (
  <ToggleButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
