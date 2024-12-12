'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const ThirdSection = () => {
  return (
    <div className="mb-10 min-h-screen px-4 py-5">
  {/* El Proceso Section */}
  <div className="my-12 flex flex-col md:flex-row gap-2 md:mt-12">
    {/* Left Image Section */}
    <div className="flex-1">
      <Image
        src={IMAGES.boxgif}
        alt="boxgif"
        width={600}
        height={600}
        className="mx-auto object-contain"
      />
    </div>

    {/* Right Text Content */}
    <div className="flex-1 text-center font-Domine md:text-left md:text-lg md:ml-4 md:mr-24  max-w-lg">
      <TitlesButton
        title={<span className="text-5xl font-medium mb-4">El Proceso</span>}
        subtitle={<span className="font-bold mt-4 text-3xl">¿Cómo encontramos los vinos perfectos para ti?</span>}
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
  <div className="mt-20 flex flex-col gap-2 rounded-lg bg-beige px-4 md:flex-row md:px-12">
    {/* Left Image Section */}
    <div className="flex-1 ml-14 justify-center md:justify-start">
      <Image
        src={IMAGES.winebox}
        alt="Wine Box"
        width={400}
        height={500}
        className="object-cover -mt-20 md:h-[300px] md:w-[500px] md:-mt-24"
      />
    </div>

    {/* Right Text Content */}
    <div className="mt-10 flex-1 text-center md:mt-10 md:text-left md:ml-1">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">
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
