'use client';
import React from 'react';
import TextButton from './TextButton'; // Import TextButton component

export const HeroSection = () => {
  const handleButtonClick = () => {
    console.log('Start clicked');
    // Add your logic for button click
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat  h-screen bg-wines bg-70p">
      <div className="absolute flex  bg-white items-left justify-center">
        <div className="text-left text-white ">
          <h1 className="text-3xl font-bold text-black mb-4">Descubre el vino perfecto para ti</h1>
          <div className="flex w-1/2 bg-transparent items-start">
            <TextButton
              subtitle="Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas"
              paragraphs={[
                "Sorpréndete con nuevos sabores y experiencias inolvidables",
              ]}
              buttonText="Empezar"
              buttonLink="#start" // Provide the link or route for the button action
              reverseLayout={false} // Set to true if you want to reverse the layout
              showButton={true} // Ensure the button is shown
            />
          </div>  
        </div>
      </div>
    </div>
  );
};
