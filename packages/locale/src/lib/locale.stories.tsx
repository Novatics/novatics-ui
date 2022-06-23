import { Story, Meta } from '@storybook/react';
import { Locale, LocaleProps } from './locale';

export default {
  component: Locale,
  title: 'Locale',
} as Meta;

const Template: Story<LocaleProps> = (args) => <Locale {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
