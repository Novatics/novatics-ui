import { Story, Meta } from '@storybook/react';
import { DialogContent, DialogContentProps } from './dialog-content';

export default {
  component: DialogContent,
  title: 'DialogContent',
} as Meta;

const Template: Story<DialogContentProps> = (args) => (
  <DialogContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
