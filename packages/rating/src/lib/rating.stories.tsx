import { Story, Meta } from '@storybook/react';
import { Rating, RatingProps } from './rating';

export default {
  component: Rating,
  title: 'Rating',
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
