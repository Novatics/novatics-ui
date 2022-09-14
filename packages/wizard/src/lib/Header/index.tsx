import React from 'react';
import { Step } from '../wizard';

export interface HeaderProps {
  step: Step;
}

const Header = ({ step }: HeaderProps) => {
  return (
    <div>
      <h2>{step.title}</h2>
      <h4>{step.subtitle}</h4>
    </div>
  );
};

export default Header;
