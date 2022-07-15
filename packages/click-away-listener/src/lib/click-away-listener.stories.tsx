import { Story, Meta } from '@storybook/react';
import {
  ClickAwayListener,
  ClickAwayListenerProps,
} from './click-away-listener';

export default {
  component: ClickAwayListener,
  title: 'ClickAwayListener',
} as Meta;

const Template: Story<ClickAwayListenerProps> = (args) => (
  <ClickAwayListener {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
