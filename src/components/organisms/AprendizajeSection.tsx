'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst'; // Ensure the correct path for images

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AprendizajeSection = () => {
  return (
    <div className="mb-12 p-6 md:mb-20 md:px-12 md:py-10 lg:px-20">
      {/* Tu Aprendizaje Section */}
      <div className="flex flex-col items-center md:flex-row">
        {/* Image Section */}
        <div className="my-8 flex w-full justify-center md:my-12 md:w-1/2">
          <Image
            src={IMAGES.bottleimg}
            alt="Bottle Information"
            width={617} // Adjust width for responsiveness
            height={626} // Adjust height for responsiveness
            className="max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="mb-6 w-full text-center md:mb-0 md:ml-8 md:w-1/2 md:text-left">
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
