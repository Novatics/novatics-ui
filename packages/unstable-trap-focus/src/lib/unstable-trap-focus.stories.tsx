import { Story, Meta } from '@storybook/react';
import {
  UnstableTrapFocus,
  UnstableTrapFocusProps,
} from './unstable-trap-focus';

export default {
  component: UnstableTrapFocus,
  title: 'UnstableTrapFocus',
} as Meta;

const Template: Story<UnstableTrapFocusProps> = (args) => (
  <UnstableTrapFocus {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
