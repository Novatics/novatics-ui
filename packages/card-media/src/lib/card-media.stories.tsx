import { Story, Meta } from '@storybook/react';
import { CardMedia, CardMediaProps } from './card-media';

export default {
  component: CardMedia,
  title: 'CardMedia',
} as Meta;

const Template: Story<CardMediaProps> = (args) => <CardMedia {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
