'use client';
import React from 'react';
import TitlesButton from './TitlesButton'; // Adjust the import path as necessary

export const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wines bg-cover bg-center bg-no-repeat pl-6 sm:pl-6 md:pl-10 lg:pl-12 xl:pl-16">

      {/* Main Text */}
      <div className="absolute left-0 top-0 z-10 mb-2 flex text-2xl text-vineogray sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl px-4">
        Descubre el vino perfecto para ti
      </div>

      {/* Left Side - Text and Button */}
      <div className="absolute left-0 top-0 z-10 my-10 mb-6 ml-6 flex w-3/4 flex-col items-start justify-start text-vineogray sm:w-1/2 lg:w-1/3 sm:flex-row sm:py-4 md:mt-4 md:w-1/3 md:py-8 lg:w-1/4 xl:w-1/5">
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
