import { Story, Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './button-group';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
