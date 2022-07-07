import { Story, Meta } from '@storybook/react';
import { AccordionDetails, AccordionDetailsProps } from './accordion-details';

export default {
  component: AccordionDetails,
  title: 'AccordionDetails',
} as Meta;

const Template: Story<AccordionDetailsProps> = (args) => (
  <AccordionDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
