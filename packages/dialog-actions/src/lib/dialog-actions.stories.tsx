import { Story, Meta } from '@storybook/react';
import { DialogActions, DialogActionsProps } from './dialog-actions';

export default {
  component: DialogActions,
  title: 'DialogActions',
} as Meta;

const Template: Story<DialogActionsProps> = (args) => (
  <DialogActions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
