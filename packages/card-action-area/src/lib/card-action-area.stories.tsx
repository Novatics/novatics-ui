import { Story, Meta } from '@storybook/react';
import { CardActionArea, CardActionAreaProps } from './card-action-area';

export default {
  component: CardActionArea,
  title: 'CardActionArea',
} as Meta;

const Template: Story<CardActionAreaProps> = (args) => (
  <CardActionArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
