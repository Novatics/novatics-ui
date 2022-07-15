import { Story, Meta } from '@storybook/react';
import { Popover, PopoverProps } from './popover';

export default {
  component: Popover,
  title: 'Popover',
} as Meta;

const Template: Story<PopoverProps> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
