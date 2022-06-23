import { Story, Meta } from '@storybook/react';
import { ImageListItemBar, ImageListItemBarProps } from './image-list-item-bar';

export default {
  component: ImageListItemBar,
  title: 'ImageListItemBar',
} as Meta;

const Template: Story<ImageListItemBarProps> = (args) => (
  <ImageListItemBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
