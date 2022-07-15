import { Story, Meta } from '@storybook/react';
import { Collapse, CollapseProps } from './collapse';

export default {
  component: Collapse,
  title: 'Collapse',
} as Meta;

const Template: Story<CollapseProps> = (args) => <Collapse {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
