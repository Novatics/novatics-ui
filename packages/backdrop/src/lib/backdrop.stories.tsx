import { Story, Meta } from '@storybook/react';
import { Backdrop, BackdropProps } from './backdrop';

export default {
  component: Backdrop,
  title: 'Backdrop',
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
