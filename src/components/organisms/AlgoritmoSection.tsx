'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AlgoritmoSection = () => {
  return (
    <div className="flex flex-col items-center p-1 px-12">
      {/* El Algoritmo Section */}
      <div className="my-5 sm:px-6 lg:ml-6 ">
        <div className="justify-left lg:items-left flex flex-col md:flex-row md:justify-center lg:flex-row">
          {/* Right Column - Illustration/Graph Section */}
          <div className="order-first flex-1 md:order-last lg:order-last">
            <Image
              src={IMAGES.graph}
              alt="Algorithm Illustration"
              width={380}
              height={550}
              className="mx-10 xl:ml-64 md:ml-8"
            />
          </div>

          {/* Left Column - TitlesButton */}
          <div className="flex-1 text-center md:ml-10 md:w-1/2 md:text-left">
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
