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
    <div className="bg-white mt-10 p-4 rounded-lg shadow-xl text-center flex flex-col justify-center items-center max-w-xs relative"> 
  {/* Icon placed within the top center with slight overlap */}
  <div className="absolute top-0 left-0 right-0 flex justify-center">
    <img
      src={iconSrc}
      alt="icon"
      className="h-24 w-24 rounded-full -mt-12" /> {/* Adjusted size and margin */}
  </div>
  {/* Card content */}
  <h3 className="text-xl font-bold text-vineogray mt-10">{title}</h3> {/* Adjusted margin to give space below the icon */}
  <p className="text-md font-normal text-vineoblack mt-4">{description}</p> {/* Adjusted margin for the description */}
</div>

  );
};
