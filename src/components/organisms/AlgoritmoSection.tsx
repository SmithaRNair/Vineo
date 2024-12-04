'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AlgoritmoSection = () => {
  return (
    <div className="min-h-screen px-8 py-12">
      {/* El Algoritmo Section */}
      <div className="my-8 flex flex-col justify-evenly space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        {/* Right Column - Illustration/Graph Section */}
        <div className="flex justify-center lg:w-1/2 order-first lg:order-last">
          <div className="flex justify-center items-center bg-white">
            <Image
              src={IMAGES.graph}
              alt="Algorithm Illustration"
              width={300}
              height={500}
              className="object-contain mx-auto md:ml-8"
            />
          </div>
        </div>

        {/* Left Column - TitlesButton */}
        <div className="lg:w-1/2 text-center md:text-left md:max-w-[29rem] md:ml-16">
          <TitlesButton
            title={<span className="font-medium text-2xl text-center md:text-left">El Algoritmo</span>}
            subtitle={<span className="font-bold text-center md:text-left">Cada vez que valoras un vino, mejora el algoritmo</span>}
            paragraphs={[
              'Nuestro algoritmo aprende con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.',
            ]}
            buttonText="Comienza"
            buttonLink="/algoritmo" // Replace with your actual link
            reverseLayout={false}
            showButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AlgoritmoSection;
