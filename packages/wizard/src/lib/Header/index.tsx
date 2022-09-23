import React from 'react';
import { Step } from '../wizard';

export interface ComponentOverrideProps {
  step: Step;
}

export interface HeaderProps {
  step: Step;
  ComponentOverride: React.FC<ComponentOverrideProps>;
}

const Header = ({ step, ComponentOverride }: HeaderProps) => {
  if (ComponentOverride) {
    return <ComponentOverride step={step} />;
  }

  return (
    <div>
      <h2>{step.title}</h2>
      <h4>{step.subtitle}</h4>
    </div>
  );
};

export default Header;
