import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Wizard, { WizardProps } from './wizard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  HeaderBaseProps,
  FooterBaseProps,
  ContentBaseProps,
  TabBaseProps,
} from './types';

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

function Form({
  onNext,
  onBack,
  onFinish,
  isLinear,
  showCompleted,
  TabOverride,
  HeaderOverride,
  ContentOverride,
  FooterOverride,
  TabsProps
}: WizardProps) {
  const [form, setForm] = useState({ name: '' });

  const steps = [
    {
      title: '01. Select campaign settings',
      subtitle: 'Subtitle',
      content: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
      disabled: false,
      components: {
        Tab: (props) => {
          return <div>Tab Teste {`${String(props.step.isActive)}`}</div>
        },
        Header: (props) => {
          return <div>teste header</div>
        },
        Content: () => <div>teste content</div>,
        Footer: () => <div>teste footer</div>,
      }
    },
    {
      title: '02. Create an ad group',
      subtitle: 'Subtitle with more text',
      content: <NameForm form={form} setForm={setForm} />,
      status: "completed",
      disabled: false,
    },
    {
      title: '03. Create an ad',
      subtitle: 'You can write some cool information stuff here',
      content: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
      disabled: false,
    },
  ];

  return (
    <Wizard
      onNext={onNext}
      onBack={onBack}
      onFinish={onFinish}
      steps={steps}
      isLinear={isLinear}
      showCompleted={showCompleted}
      TabOverride={TabOverride}
      HeaderOverride={HeaderOverride}
      ContentOverride={ContentOverride}
      FooterOverride={FooterOverride}
      tabIndicatorColor="black"
    />
  );
}

const onBack = () => {
  // onBack stuff
  console.log('onBack');
};

const onNext = () => {
  // onNext stuff
  console.log('onNext');
};

const onFinish = () => {
  // onFinish stuff
  console.log('onFinish');
};

const TabOverride = ({ step }: TabBaseProps) => {
  return <div>tab {step.title}</div>;
};

const HeaderOverride = ({ step }: HeaderBaseProps) => {
  return <div>HEADER {step.title}</div>;
};

const ContentOverride = ({ content }: ContentBaseProps) => {
  return <div>{content}</div>;
};

const FooterOverride = ({
  handleBack,
  handleNext,
  handleFinish,
  isFirst = false,
  isLast = false,
}: FooterBaseProps) => {
  return (
    <>
      <button onClick={handleBack}>BACK</button>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
};

const Template: Story<WizardProps> = (args) => {
  return <Form {...args} onBack={onBack} onNext={onNext} onFinish={onFinish} />;
};

export const Linear = Template.bind({});
Linear.args = {
  isLinear: true,
};

export const NonLinear = Template.bind({});
NonLinear.args = {
  isLinear: false,
};

export const ShowCompleted = Template.bind({});
ShowCompleted.args = {
  showCompleted: true,
};

export const ComponentsOverride = Template.bind({});
ComponentsOverride.args = {
  HeaderOverride: HeaderOverride,
  ContentOverride: ContentOverride,
  FooterOverride: FooterOverride,
  TabOverride: TabOverride,
};

export const DisabledTab = Template.bind({});
DisabledTab.args = {};
