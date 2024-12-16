'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst'; // Ensure the correct path for images

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AprendizajeSection = () => {
  return (
    <div className="px-8 py-2 mb-20">
      {/* Tu Aprendizaje Section */}
      <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Image Section */}
          <div className="my-12 px-4 sm:px-6 md:ml-24 lg:px-8 lg:ml-16">
          <div className="flex flex-col items-center justify-between lg:flex-row ">
              <Image
                src={IMAGES.bottleimg}
                alt="Bottle Information"
                width={602}
                height={900}

              />
            </div>
          </div>

          {/* Text Section */}
          <div className=" mb-8 max-w-2xl text-left ml-10 md:order-2">
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
