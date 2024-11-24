'use client';
import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';
import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const ThirdSection = () => {
  return (
    <div className="min-h-screen px-8 py-12">
      {/* El Proceso Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 my-12 px-4 md:px-12">
        {/* Image shifted to the right using negative margin */}
        <div className="flex-1 -mr-8 pt-12 md:-mr-16">
          <Image src={IMAGES.boxgif} alt="boxgif" width={400} height={400} />
        </div>

        {/* Right Text Content shifted to the left */}
        <div className="flex-1 max-w-lg font-Domine -ml-4 md:-ml-8">
          <TitlesButton
            title="El Proceso"
            subtitle="¿Cómo encontramos los vinos perfectos para ti?"
            paragraphs={[
              'Analizamos tus preferencias de vino a través de 18 aspectos clave.',
              'Luego, nuestro algoritmo determina la probabilidad de que te guste cada botella que incluiremos en cada caja.',
              'Este valor se utiliza para seleccionar cuidadosamente las botellas de vino que incluiremos en tu caja.',
            ]}
            buttonText="Comienza"
            buttonLink="/path/to/next-step"
            reverseLayout={false}
            showButton={true}
          />
        </div>
      </div>

            {/* La esencia de Vineo Section */}
      {/* La esencia de Vineo Section */}
      <div className="mt-0 flex flex-col h-[300px] md:flex-row items-center gap-8 md:gap-16 px-4 md:px-12 bg-beige rounded-lg">
        <div className="flex-1 mb-28 flex-shrink-0 -mr-8 md:-mr-16">
          <Image
            src={IMAGES.winebox}  // Ensure your image path is correct
            alt="Wine Box"
            width={700} height={700}
            // Ensures the image adapts to the screen size without stretching
          />
        </div>
        <div className="flex-1 max-w-lg text-center md:text-left -ml-4 md:-ml-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            La esencia de Vineo
          </h3>
          <p className="text-gray-600">
            Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias.
          </p>
        </div>
      </div>


    </div>
  );
};

export default ThirdSection;
