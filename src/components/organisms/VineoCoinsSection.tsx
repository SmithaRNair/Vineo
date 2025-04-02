'use client';
import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';
import TitlesButton from '../molecules/TitlesButton'; // Import TitlesButton component

const VineoCoinsSection = () => {
  return (
    <div className="flex flex-col space-y-2">
      {/* First Row: Flex with Beige Background */}
      <div className="flex items-start justify-center bg-beige py-2">
        <div className="max-w-[74rem] text-center">
          <h2 className="font-domine font-bold text-[2.5rem] text-vineogray mt-10 mb-6">
            Suba de nivel con cada caja
          </h2>
          <p className="text-[2rem] font-normal text-vineoblack mb-16">
            Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas con tus Vineo Coins 
          </p>
        </div>
      </div>

      {/* Second Row: Split into two columns */}
      <div className="flex bg-bottleglass bg-contain  bg-no-repeat bg-right-top">
        {/* Left Column: GIF */}
        <div className="flex-1 justify-center ml-20 w-32 mt-32">
          <Image
            src={IMAGES.gif2}
            alt="Algorithm Illustration"
            width={500}
            height={500}
            className="object-contain border-2 rounded-lg shadow-lg mx-auto md:ml-20"
          />
        </div>

        {/* Right Column: TitlesButton Component */}
        <div className="flex-1 ml-0 py-11">
          <div className="relative z-10 flex-col justify-end md:max-w-6xl  md:mt-10">
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