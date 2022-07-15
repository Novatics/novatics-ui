import { Story, Meta } from '@storybook/react';
import {
  ScopedCssBaseline,
  ScopedCssBaselineProps,
} from './scoped-css-baseline';

export default {
  component: ScopedCssBaseline,
  title: 'ScopedCssBaseline',
} as Meta;

const Template: Story<ScopedCssBaselineProps> = (args) => (
  <ScopedCssBaseline {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
