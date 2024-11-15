'use client';
import React from 'react';

interface IconTextCardProps {
  iconSrc: string; // Image or icon source
  title: string;
  description: string;
}

export const IconTextCard = ({
  iconSrc,
  title,
  description,
}: IconTextCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto text-center space-y-4">
      <img src={iconSrc} alt="icon" className="h-16 w-16 mx-auto" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};
