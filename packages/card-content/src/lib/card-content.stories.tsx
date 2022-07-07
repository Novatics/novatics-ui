import { Story, Meta } from '@storybook/react';
import { CardContent, CardContentProps } from './card-content';

export default {
  component: CardContent,
  title: 'CardContent',
} as Meta;

const Template: Story<CardContentProps> = (args) => <CardContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
