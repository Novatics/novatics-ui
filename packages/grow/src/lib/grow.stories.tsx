import { Story, Meta } from '@storybook/react';
import { Grow, GrowProps } from './grow';

export default {
  component: Grow,
  title: 'Grow',
} as Meta;

const Template: Story<GrowProps> = (args) => <Grow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
