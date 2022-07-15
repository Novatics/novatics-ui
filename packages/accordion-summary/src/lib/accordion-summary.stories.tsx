import { Story, Meta } from '@storybook/react';
import { AccordionSummary, AccordionSummaryProps } from './accordion-summary';

export default {
  component: AccordionSummary,
  title: 'AccordionSummary',
} as Meta;

const Template: Story<AccordionSummaryProps> = (args) => (
  <AccordionSummary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
