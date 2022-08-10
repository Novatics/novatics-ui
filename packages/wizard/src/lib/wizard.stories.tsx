import { Meta, Story } from '@storybook/react';
import React from 'react';
import Wizard, { WizardProps } from './wizard';

export default {
  component: Wizard,
  title: 'Wizard',
} as Meta;

const Template: Story<WizardProps> = (args) => <Wizard {...args} />;

const onBack = () => {
  // onBack stuff
};

const onNext = () => {
  // onNext stuff
};

export const Primary = Template.bind({});
Primary.args = { onBack: onBack, onNext: onNext };
