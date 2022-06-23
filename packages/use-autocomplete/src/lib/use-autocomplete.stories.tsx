import { Story, Meta } from '@storybook/react';
import { UseAutocomplete, UseAutocompleteProps } from './use-autocomplete';

export default {
  component: UseAutocomplete,
  title: 'UseAutocomplete',
} as Meta;

const Template: Story<UseAutocompleteProps> = (args) => (
  <UseAutocomplete {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
