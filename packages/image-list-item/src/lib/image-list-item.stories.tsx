import { Story, Meta } from '@storybook/react';
import { ImageListItem, ImageListItemProps } from './image-list-item';

export default {
  component: ImageListItem,
  title: 'ImageListItem',
} as Meta;

const Template: Story<ImageListItemProps> = (args) => (
  <ImageListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
