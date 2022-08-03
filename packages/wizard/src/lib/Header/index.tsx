import React from 'react';

interface HeaderProps {
  step: number;
  title?: string;
  subtitle?: string
}

const Header = ({ step, title = `STEP ${step} Template`, subtitle}: HeaderProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default Header;
