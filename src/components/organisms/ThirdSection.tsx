'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton'; // Import the TitlesButton component

const ThirdSection = () => {
  return (
    <div className="mb-10 w-full px-4 py-5">
  {/* El Proceso Section */}
  <div className=" flex flex-col justify-center my-12 md:flex-row  md:mt-14">
    {/* Left Image Section */}
    <div className="flex-1 mt-10">
      <Image
        src={IMAGES.boxgif}
        alt="boxgif"
        width={600}
        height={600}
        className="mx-auto object-contain"
      />
    </div>

    {/* Right Text Content */}
    <div className="flex-1 text-center font-Domine md:text-left md:text-lg md:ml-4 md:mr-24  ">
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
  <div className="mt-16 flex flex-col rounded-lg bg-beige w-full md:flex-row ">
    {/* Left Image Section */}
    <div className="ml-14 justify-center md:justify-start">
      <Image
        src={IMAGES.winebox}
        alt="Wine Box"
        width={1100}
        height={800}
        className="-mt-80"
      />
    </div>

    {/* Right Text Content */}
    <div className=" flex-1 font-Domine md:mt-10 md:text-left  lg:max-w-4xl">
      <div className="mt-14 mb-4 text-2xl font-bold text-[2.5rem] text-center text-vineogray">
        La esencia de Vineo
      </div>
      <div className="mt-10 font-normal text-3xl text-left text-vineoblack">
        Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias.
      </div>
    </div>
  </div>
</div>

  );
};

export default ThirdSection;
