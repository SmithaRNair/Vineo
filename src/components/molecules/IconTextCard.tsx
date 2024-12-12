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
    <div className="bg-card-gradient mt-10 p-4 rounded-xl shadow-2xl text-center flex flex-col justify-center items-center w-[21rem] h-60 relative"> 
  {/* Icon placed within the top center with slight overlap */}
  <div className="absolute top-0 left-0 right-0 flex justify-center">
    <img
      src={iconSrc}
      alt="icon"
      className="h-32 w-32 rounded-full -mt-16" /> {/* Adjusted size and margin */}
  </div>
  {/* Card content */}
  <h3 className="text-2xl text-center font-bold text-vineogray  mt-10">{title}</h3> {/* Adjusted margin to give space below the icon */}
  <div className="text-xl text-center font-normal text-vineoblack px-3 mt-4">{description}</div> {/* Adjusted margin for the description */}
</div>

  );
};
