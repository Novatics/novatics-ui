import { Story, Meta } from '@storybook/react';
import { InputBase, InputBaseProps } from './input-base';

export default {
  component: InputBase,
  title: 'InputBase',
} as Meta;

const Template: Story<InputBaseProps> = (args) => <InputBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
