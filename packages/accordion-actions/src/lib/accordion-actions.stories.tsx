import { Story, Meta } from '@storybook/react';
import { AccordionActions, AccordionActionsProps } from './accordion-actions';

export default {
  component: AccordionActions,
  title: 'AccordionActions',
} as Meta;

const Template: Story<AccordionActionsProps> = (args) => (
  <AccordionActions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
