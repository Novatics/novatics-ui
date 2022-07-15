import { Story, Meta } from '@storybook/react';
import { Autocomplete, AutocompleteProps } from './autocomplete';

export default {
  component: Autocomplete,
  title: 'Autocomplete',
} as Meta;

const Template: Story<AutocompleteProps> = (args) => <Autocomplete {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
