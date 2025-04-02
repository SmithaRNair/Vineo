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
    <div className="bg-card-gradient mt-10 p-5 rounded-2xl shadow-2xl text-center flex flex-col justify-center items-center w-[31rem] h-[22rem] relative"> 
  {/* Icon placed within the top center with slight overlap */}
  <div className="absolute top-0 left-0 right-0 flex justify-center">
    <img
      src={iconSrc}
      alt="icon"
      className="h-44 w-52 rounded-full -mt-24 mb-0" /> {/* Adjusted size and margin */}
  </div>
  {/* Card content */}
  <div className=" relative mt-1 text-[2rem] text-center font-bold text-vineogray ">{title}</div> {/* Adjusted margin to give space below the icon */}
  <div className="text-3xl text-center font-normal text-vineoblack px-3 mt-4 md:text-[2rem]">{description}</div> {/* Adjusted margin for the description */}
</div>

  );
};
