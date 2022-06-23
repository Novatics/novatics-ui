import { Story, Meta } from '@storybook/react';
import { Utils, UtilsProps } from './utils';

export default {
  component: Utils,
  title: 'Utils',
} as Meta;

const Template: Story<UtilsProps> = (args) => <Utils {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
