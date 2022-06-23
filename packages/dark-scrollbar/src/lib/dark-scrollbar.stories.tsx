import { Story, Meta } from '@storybook/react';
import { DarkScrollbar, DarkScrollbarProps } from './dark-scrollbar';

export default {
  component: DarkScrollbar,
  title: 'DarkScrollbar',
} as Meta;

const Template: Story<DarkScrollbarProps> = (args) => (
  <DarkScrollbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
