'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AlgoritmoSection = () => {
  return (
    <div className="p-1">
      {/* El Algoritmo Section */}
      <div className="my-5 px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-2">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {/* Right Column - Illustration/Graph Section */}
          <div className="order-first flex-1 w-full  lg:order-last lg:w-auto lg:ml-2">
            <Image
              src={IMAGES.graph}
              alt="Algorithm Illustration"
              width={380}
              height={550}
              className="mx-auto md:ml-8 lg:ml-44"
            />
          </div>

          {/* Left Column - TitlesButton */}
          <div className="flex-1 w-full px-32 text-center sm:(640-768)->text-center md:text-left lg:w-auto lg:px-10">
            <TitlesButton
              title="El Algoritmo"
              subtitle="Cada vez que valoras un vino, mejora el algoritmo"
              paragraphs={[
                'Nuestro algoritmo aprende con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.',
              ]}
              buttonText="Comienza"
              buttonLink="/" // Replace with your actual link
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