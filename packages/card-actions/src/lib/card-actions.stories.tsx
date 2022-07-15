import { Story, Meta } from '@storybook/react';
import { CardActions, CardActionsProps } from './card-actions';

export default {
  component: CardActions,
  title: 'CardActions',
} as Meta;

const Template: Story<CardActionsProps> = (args) => <CardActions {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
