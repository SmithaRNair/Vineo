'use client';

import React from 'react';
import { Button } from '../atoms/Button'; // Importing the Button component you shared earlier

interface TitleTextButtonProps {
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const TitleTextButton: React.FC<TitleTextButtonProps> = ({
  title,
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex justify-start items-start min-h-screen bg-gray-100 p-8">
      {/* Container Box shifted to the left */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-left">
          {title}
        </h2>
        
        {/* Description Text */}
        <div className="mt-4 text-lg text-gray-600 text-left break-words">
          {text}
        </div>
        
        {/* Button */}
        <div className="mt-6 text-left">
          <Button 
            text={buttonText} 
            onClick={onButtonClick} 
            variant="contained" 
            color="orange" 
          />
        </div>
      </div>
    </div>
  );
};
