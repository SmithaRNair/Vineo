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
    <div className="relative w-full max-w-md">
      {/* Input Field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-vineogray/55 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address`} // Added full border-radius for rounded input
        placeholder="email"
      />
      
      {/* Button inside the input box */}
      <button
        onClick={handleSubmit}
        className={`absolute right-1 top-1 rounded bg-vineopink py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
      >
        {buttonText}
      </button>
    </div>
  );
};

{/* <div class="w-full max-w-sm min-w-[200px]">
  <div class="relative">
    <input type="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
    <button
      class="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Invite
    </button>
  </div>
</div> */}