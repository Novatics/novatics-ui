import { Story, Meta } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
