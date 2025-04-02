'use client';
import React, { useState } from 'react';

interface InputButtonProps {
  placeholder?: string;
  buttonText: string;
  onSubmit: (email: string) => void;
  


}

export const InputButton: React.FC<InputButtonProps> = ({
  placeholder = 'Enter your email',
  buttonText,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <div className='relative mt-2 w-full'>
    
      {/* Input Field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full w-max-xl h-20 pl-4 pr-20 rounded-xl border border-gray-300 focus:outline-none focus:bg-white focus:ring-1 placeholder-gray-400"
      />

      {/* Button inside the input box */}
      <button
        onClick={handleSubmit}
        className="absolute font-normal font-Domine text-[1.7rem] right-1 top-1/2 h-16 w-56 transform -translate-y-1/2 px-4 py-2 rounded-3xl bg-vineopink  text-white  hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </div>
     
  );
};