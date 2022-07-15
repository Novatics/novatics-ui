import { Story, Meta } from '@storybook/react';
import { DialogTitle, DialogTitleProps } from './dialog-title';

export default {
  component: DialogTitle,
  title: 'DialogTitle',
} as Meta;

const Template: Story<DialogTitleProps> = (args) => <DialogTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
