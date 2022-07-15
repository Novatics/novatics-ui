import { Story, Meta } from '@storybook/react';
import { Snackbar, SnackbarProps } from './snackbar';

export default {
  component: Snackbar,
  title: 'Snackbar',
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
