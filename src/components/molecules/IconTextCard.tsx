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
    <div className="bg-white mt-10 p-6 rounded-lg shadow-md max-w-xs mx-auto text-center flex flex-col justify-center items-center">
      {/* Icon placed within the top border */}
      <div className="w-full flex justify-center -mt-10">
        <img
          src={iconSrc}
          alt="icon"
          className="h-20 w-20 rounded-full -mt-6"
        />
      </div>
      {/* Card content */}
      <h3 className="text-xl font-semibold text-[#4A4A4A] mt-4">{title}</h3>
      <p className="text-md text-[#6A6A6A]">{description}</p>
    </div>
  );
};
