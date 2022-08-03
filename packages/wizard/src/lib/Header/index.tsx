import React from 'react';

interface HeaderProps {
  step?: number;
}

const Header = ({ step = 1 }: HeaderProps) => {
  return (
    <div>
      <h2>STEP {step} Template</h2>
    </div>
  );
};

export default Header;
