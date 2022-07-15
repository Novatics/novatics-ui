import { Story, Meta } from '@storybook/react';
import { GlobalStyles, GlobalStylesProps } from './global-styles';

export default {
  component: GlobalStyles,
  title: 'GlobalStyles',
} as Meta;

const Template: Story<GlobalStylesProps> = (args) => <GlobalStyles {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
