'use client';
import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';
import TitlesButton from '../molecules/TitlesButton'; // Import TitlesButton component

const VineoCoinsSection = () => {
  return (
    <div className="flex flex-col space-y-8">
      {/* First Row: Flex with Beige Background */}
      <div className="flex items-center justify-center bg-beige py-12">
        <div className="max-w-4xl text-center px-6">
          <h2 className="font-domine font-normal text-3xl text-vineogray mb-6">
            Suba de nivel con cada caja
          </h2>
          <p className="text-lg text-vineoblack">
            Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas 
          </p>
          <p className="text-lg text-vineoblack">
           con tus Vineo Coins
          </p>
        </div>
      </div>

      {/* Second Row: Split into two columns */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column: Blank or content of your choice */}
        <div className="flex-1 py-12 md:px-6">
          {/* Empty or some content can be added here */}
        </div>

        {/* Right Column: Image and TitlesButton Component */}
        <div className="flex-1 relative py-12">
          {/* Background Image Container */}
          <div className="relative z-10 bg-bottleglass bg-contain bg-no-repeat bg-right-top flex-col justify-end px-6 md:max-w-xl md:ml-20 md:mt-10 w-full md:w-[803px] h-[394px]">
            {/* Background image for the right side container */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/image.png')] bg-contain bg-no-repeat bg-top-right"></div>
            
            {/* TitlesButton Component */}
            <TitlesButton
              title="Tus Beneficios"
              subtitle="Vineo Coins"
              paragraphs={[
                "Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas.",
              ]}
              buttonText="Comienza"
              buttonLink="/comienza"
              reverseLayout={false}
              showButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VineoCoinsSection;
