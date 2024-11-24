'use client';
import React from 'react';

import TitlesButton from './TitlesButton';

export const HeroSection = () => {
  const handleButtonClick = () => {
    console.log('Start clicked');
    // Add your logic for button click
  };

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/wines.png)' }}>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative z-10 flex h-full items-center px-12">
        {/* Adjusted alignment styles */}
        <div className="max-w-md space-y-6">
          <div className="absolute top-0 left-0 right-0 p-12">
            <h1 className="text-3xl font-bold text-vineogray">
              Descubre el vino perfecto para ti
            </h1>
          </div>
          <TitlesButton
             
            subtitle="Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas"
           
            paragraphs={['Sorpréndete con nuevos sabores y experiencias inolvidables']}
            buttonText="Empezar"
            buttonLink="#start" // Provide the link or route for the button action
            reverseLayout={false} // Set to true if you want to reverse the layout
            showButton={true} // Ensure the button is shown
            className="text-left mt-8 ml-12"
            subtitleClassName="text-xl font-domine font-bold text-vineogray" // Tailwind CSS classes for subtitle
            paragraphClassName="text-lg font-medium text-vineogray" // Tailwind CSS classes for paragraphs

          />
        </div>
      </div>
    </div>
  );
};
