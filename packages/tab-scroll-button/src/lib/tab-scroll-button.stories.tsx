import { Story, Meta } from '@storybook/react';
import { TabScrollButton, TabScrollButtonProps } from './tab-scroll-button';

export default {
  component: TabScrollButton,
  title: 'TabScrollButton',
} as Meta;

const Template: Story<TabScrollButtonProps> = (args) => (
  <TabScrollButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
