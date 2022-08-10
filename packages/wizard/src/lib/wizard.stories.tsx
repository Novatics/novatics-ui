import {useState} from 'react';
import { Meta, Story } from '@storybook/react';
import Wizard, { WizardProps } from './wizard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//Todo: Test if it works with a form
export default {
  component: Wizard,
  title: 'Wizard',
} as Meta;




 function NameForm({form, setForm}: any) {
  return (
    <Box>
      <TextField id="name"
                label="name"
                variant="outlined"
                 onChange={(e) => setForm({...form, name: e.target.value})}
                 value={form.name}  />
    </Box>
  )
}


function Form() {
  const [form, setForm] = useState({});

  const steps = [
    {
      label: 'Select campaign settings',
      content: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      content: <NameForm form={form} setForm={setForm}/>
    },
    {
      label: 'Create an ad',
      content: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const onBack = (currentStep: number) => {
    console.log(currentStep, form)
  };

  const onNext = (currentStep: number) => {
    console.log(currentStep, form)
  };

    return <Wizard onNext={onNext} onBack={onBack} steps={steps} />

}


const Template: Story<WizardProps> = (args) => {
  return <Form/>
};

const onBack = () => {
  // onBack stuff
};

const onNext = () => {
  // onNext stuff
};

export const Primary = Template.bind({});
Primary.args = { onBack: onBack, onNext: onNext };
