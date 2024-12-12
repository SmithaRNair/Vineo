'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AlgoritmoSection = () => {
  return (
    <div className="py-2 px-2">
      {/* El Algoritmo Section */}
      <div className="my-12 md:ml-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center lg:flex-row ">
          {/* Right Column - Illustration/Graph Section */}
          <div className="flex-1 justify-center order-first lg:order-last">
            
              <Image
                src={IMAGES.graph}
                alt="Algorithm Illustration"
                width={300}
                height={500}
                className="object-contain mx-auto md:ml-8"
              />
          </div>

          {/* Left Column - TitlesButton */}
          <div className="flex-1 text-center md:text-left">
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
    </div>
  );
};

export default AlgoritmoSection;
