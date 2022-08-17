import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Wizard, { WizardProps } from './wizard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//Todo: Test if it works with a form
export default {
  component: Wizard,
  title: 'Wizard',
} as Meta;

function NameForm({ form, setForm }: any) {
  return (
    <Box>
      <TextField
        id="name"
        label="name"
        variant="outlined"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        value={form.name}
      />
    </Box>
  );
}

function Form() {
  const [form, setForm] = useState({ name: '' });

  const steps = [
    {
      label: '01. Select campaign settings',
      subtitle: 'You can write some cool information stuff here',
      content: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: '02. Create an ad group',
      subtitle: 'You can write some cool information stuff here',
      content: <NameForm form={form} setForm={setForm} />,
    },
    {
      label: '03. Create an ad',
      subtitle: 'You can write some cool information stuff here',
      content: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const onBack = (currentStep: number) => {
    // console.log(currentStep, form);
  };

  const onNext = (currentStep: number) => {
    // console.log(currentStep, form);
  };

  const onFinish = () => {
    console.log('onFinish');
  };

  return (
    <Wizard
      onNext={onNext}
      onBack={onBack}
      onFinish={onFinish}
      steps={steps}
      isLinear={true}
      showCompleted={true}
    />
  );
}

const Template: Story<WizardProps> = (args) => {
  return <Form />;
};

const onBack = () => {
  // onBack stuff
};

const onNext = () => {
  // onNext stuff
};

const onFinish = () => {
  // onFinish stuff
};

export const Primary = Template.bind({});
Primary.args = { onBack: onBack, onNext: onNext, onFinish: onFinish };
