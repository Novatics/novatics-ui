import { Story, Meta } from '@storybook/react';
import { ListSubheader, ListSubheaderProps } from './list-subheader';

export default {
  component: ListSubheader,
  title: 'ListSubheader',
} as Meta;

const Template: Story<ListSubheaderProps> = (args) => (
  <ListSubheader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
