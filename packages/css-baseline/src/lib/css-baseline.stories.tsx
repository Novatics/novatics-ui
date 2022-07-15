import { Story, Meta } from '@storybook/react';
import { CssBaseline, CssBaselineProps } from './css-baseline';

export default {
  component: CssBaseline,
  title: 'CssBaseline',
} as Meta;

const Template: Story<CssBaselineProps> = (args) => <CssBaseline {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
