import { Story, Meta } from '@storybook/react';
import { SnackbarContent, SnackbarContentProps } from './snackbar-content';

export default {
  component: SnackbarContent,
  title: 'SnackbarContent',
} as Meta;

const Template: Story<SnackbarContentProps> = (args) => (
  <SnackbarContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
