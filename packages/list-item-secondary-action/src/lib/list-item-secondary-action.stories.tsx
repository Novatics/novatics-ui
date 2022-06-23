import { Story, Meta } from '@storybook/react';
import {
  ListItemSecondaryAction,
  ListItemSecondaryActionProps,
} from './list-item-secondary-action';

export default {
  component: ListItemSecondaryAction,
  title: 'ListItemSecondaryAction',
} as Meta;

const Template: Story<ListItemSecondaryActionProps> = (args) => (
  <ListItemSecondaryAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
