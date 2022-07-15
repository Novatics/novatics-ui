import { Story, Meta } from '@storybook/react';
import { Paper, PaperProps } from './paper';

export default {
  component: Paper,
  title: 'Paper',
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
