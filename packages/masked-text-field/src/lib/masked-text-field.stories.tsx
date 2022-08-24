import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { MaskedTextField, MaskedTextFieldProps } from './masked-text-field';

export default {
  component: MaskedTextField,
  title: 'MaskedTextField',
} as ComponentMeta<typeof MaskedTextField>;

const Form = (args: MaskedTextFieldProps) => {
  const [input, setInput] = useState(args.value);

  return (
    <MaskedTextField
      maskPreset="phone"
      label="Test label input"
      name="name test "
      id="format-input"
      variant="outlined"
      {...args}
      value={input}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInput(e.target.value)
      }
    />
  );
};

const Template: ComponentStory<typeof MaskedTextField> = (args) => {
  return <Form {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
