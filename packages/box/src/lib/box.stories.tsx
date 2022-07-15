import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './box';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
