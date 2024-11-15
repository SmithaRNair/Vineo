'use client';

import React, { useState } from 'react';

interface InputButtonProps {
  buttonText: string;
  onSubmit: (email: string) => void;
  inputWidth?: string; // Optional prop to control width of input
  inputHeight?: string; // Optional prop to control height of input
  buttonWidth?: string; // Optional prop to control width of button
}

export const InputButton: React.FC<InputButtonProps> = ({
  buttonText,
  onSubmit,
  inputWidth = 'w-full', // Default to full width
  inputHeight = 'h-12', // Default to a medium height
  buttonWidth = 'w-32', // Default button width (smaller than the input)
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <div className="flex items-center w-full max-w-md">
      {/* Input Field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`p-3 border-2 border-gray-300 rounded-l-lg ${inputWidth} ${inputHeight} pr-4`} // Add padding-right for space for the button
        placeholder="email"
      />
      
      {/* Button */}
      <button
        onClick={handleSubmit}
        className={`bg-vineopink text-white py-2 px-6 rounded-r-lg ${buttonWidth}`}
      >
        {buttonText}
      </button>
    </div>
  );
};
