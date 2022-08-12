import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { MaskedTextField } from './masked-text-field';

export default {
  component: MaskedTextField,
  title: 'MaskedTextField',
} as ComponentMeta<typeof MaskedTextField>;

const Form = (args: typeof MaskedTextField) => {
  const [input, setInput] = useState(args.value);

  return (
    <MaskedTextField
      value={input}
      onChange={(e) => setInput(e.target.value)}
      {...args}
    />
  );
};

const Template: ComponentStory<typeof MaskedTextField> = (args) => {
  return <Form {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
