import React from 'react';
import { HeaderProps } from '../types';

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
