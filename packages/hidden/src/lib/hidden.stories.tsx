import { Story, Meta } from '@storybook/react';
import { Hidden, HiddenProps } from './hidden';

export default {
  component: Hidden,
  title: 'Hidden',
} as Meta;

const Template: Story<HiddenProps> = (args) => <Hidden {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
