import { Story, Meta } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';

export default {
  component: Tabs,
  title: 'Tabs',
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
