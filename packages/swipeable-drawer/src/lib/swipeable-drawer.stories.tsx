import { Story, Meta } from '@storybook/react';
import { SwipeableDrawer, SwipeableDrawerProps } from './swipeable-drawer';

export default {
  component: SwipeableDrawer,
  title: 'SwipeableDrawer',
} as Meta;

const Template: Story<SwipeableDrawerProps> = (args) => (
  <SwipeableDrawer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
