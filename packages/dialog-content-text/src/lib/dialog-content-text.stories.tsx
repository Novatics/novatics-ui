import { Story, Meta } from '@storybook/react';
import {
  DialogContentText,
  DialogContentTextProps,
} from './dialog-content-text';

export default {
  component: DialogContentText,
  title: 'DialogContentText',
} as Meta;

const Template: Story<DialogContentTextProps> = (args) => (
  <DialogContentText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
