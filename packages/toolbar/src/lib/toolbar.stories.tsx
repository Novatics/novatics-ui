import { Story, Meta } from '@storybook/react';
import { Toolbar, ToolbarProps } from './toolbar';

export default {
  component: Toolbar,
  title: 'Toolbar',
} as Meta;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
