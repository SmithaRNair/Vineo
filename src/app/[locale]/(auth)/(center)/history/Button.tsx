import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded px-2 py-1 ${className}`}
  >
    {children}
  </button>
);

export default Button;
