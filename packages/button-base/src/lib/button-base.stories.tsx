import { Story, Meta } from '@storybook/react';
import { ButtonBase, ButtonBaseProps } from './button-base';

export default {
  component: ButtonBase,
  title: 'ButtonBase',
} as Meta;

const Template: Story<ButtonBaseProps> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
