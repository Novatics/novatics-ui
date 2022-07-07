import { Story, Meta } from '@storybook/react';
import { Popper, PopperProps } from './popper';

export default {
  component: Popper,
  title: 'Popper',
} as Meta;

const Template: Story<PopperProps> = (args) => <Popper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
