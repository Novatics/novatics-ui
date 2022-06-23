import { Story, Meta } from '@storybook/react';
import { TextareaAutosize, TextareaAutosizeProps } from './textarea-autosize';

export default {
  component: TextareaAutosize,
  title: 'TextareaAutosize',
} as Meta;

const Template: Story<TextareaAutosizeProps> = (args) => (
  <TextareaAutosize {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
