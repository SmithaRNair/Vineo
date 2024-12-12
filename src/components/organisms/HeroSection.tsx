'use client';
import React from 'react';

import TitlesButton from '../molecules/TitlesButton'; // Adjust the import path as necessary

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen  overflow-hidden bg-wines bg-cover bg-center bg-no-repeat pl-4 sm:pl-3 md:pl-5 lg:pl-5 xl:pl-5 2xl:pl-5">
          {/* Main Text */}
        <div className="ml-2 mt-10 flex px-4 font-bold text-2xl text-vineogray sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          Descubre el vino perfecto para ti
        </div>

        {/* Left Side - Text and Button */}
        <div className="flex ml-2 items-start text-vineogray sm:w-1/2 sm:py-4  md:w-1/4  lg:w-1/3 lg:text-2xl lg:w-1/5 xl:w-1/5 2xl:w-1/5 max-w-md">
          <TitlesButton
            subtitle="" // Optional: You can leave this empty or add a subtitle if needed
            paragraphs={[
              'Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas.',
              'Sorpréndete con nuevos sabores y experiencias inolvidables.',
            ]}
            paragraphClassNames={[
              'text-vineogray', // For the first paragraph
              'text-vineogray', // For the second paragraph
            ]}
            buttonText="Empieza"
            buttonLink="/start" // Adjust the link as necessary
            reverseLayout={false}
            showButton={true}
          />
        </div>
    </div>
  );
};
