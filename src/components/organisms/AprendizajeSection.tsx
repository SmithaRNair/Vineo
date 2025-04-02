'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst'; // Ensure the correct path for images

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AprendizajeSection = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-6 md:py-10 mb-12 md:mb-20">
      {/* Tu Aprendizaje Section */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center my-8 md:my-12">
          <Image
            src={IMAGES.bottleimg}
            alt="Bottle Information"
            width={400} // Adjust width for responsiveness
            height={600} // Adjust height for responsiveness
            className="w-auto h-auto max-w-full md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <TitlesButton
            title="Tu Aprendizaje"
            subtitle="Aprende sobre vinos con cada caja"
            paragraphs={[
              'Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.',
              'Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!',
            ]}
            reverseLayout={false}
            showButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AprendizajeSection;
