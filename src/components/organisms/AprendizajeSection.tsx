'use client';
import React from 'react';
import { IMAGES } from '@/constants/AppConst'; // Ensure the correct path for images
import Image from 'next/image';
import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const AprendizajeSection = () => {
  return (
    <div className="px-8 py-12">
      {/* Tu Aprendizaje Section */}
      <div className="my-12 md:ml-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Image Section */}
          <div className="flex justify-center md:w-1/2 lg:max-w-[450px] order-1 md:order-1">
            <div className="w-full bg-white overflow-hidden">
              <Image
                src={IMAGES.bottleimg}
                alt="Bottle Information"
                width={400}
                height={600}
                layout="intrinsic"
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-left max-w-xl md:max-w-lg lg:max-w-xl px-6 mb-8 md:mb-0 order-2 md:order-2">
            <TitlesButton
              title={<span className="text-2xl  font-medium sm:text-xl sm:text-center">Tu Aprendizaje</span>}
              subtitle={<span className="font-bold text-xl">Aprende sobre vinos con cada caja</span>}
              paragraphs={[
                "Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.",
                "Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!"
              ]}
              reverseLayout={false}
              showButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeSection;
