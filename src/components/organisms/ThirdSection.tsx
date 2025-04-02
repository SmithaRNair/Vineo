'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import TitlesButton from '../molecules/TitlesButton';

const ThirdSection = () => {
  return (
    <div className="mb-10 w-full px-4 py-5 sm:mb-0">
      {/* El Proceso Section */}
      <div className="my-12 flex flex-col items-center md:mt-14 md:flex-row md:items-start">
        {/* Left Image Section */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src={IMAGES.boxgif}
            alt="boxgif"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="flex-1 text-center font-Domine text-[2.81rem] font-normal text-vineogray md:text-left lg:text-left">
            El Proceso
          </div>
          <div className="text-center md:text-left lg:text-left">
            <TitlesButton
              subtitle="¿Cómo encontramos los vinos perfectos para ti?"
              paragraphs={[
                'Analizamos tus preferencias de vino a través de 18 aspectos clave.',
                'Luego, nuestro algoritmo determina la probabilidad de que te guste cada botella que incluiremos en cada caja.',
                'Este valor se utiliza para seleccionar cuidadosamente las botellas de vino que incluiremos en tu caja.',
              ]}
              buttonText="Comienza"
              buttonLink="/path/to/next-step"
              showButton={true}
            />
          </div>
        </div>
      </div>

      {/* La esencia de Vineo Section */}
      <div className="mt-12 flex flex-col items-center rounded-lg bg-wine-gradient p-6 md:flex-row md:p-12">
        {/* La esencia de Vineo Section */}
        <div className="w-full flex-1 rounded-lg md:flex-row ">
          {/* Left Image Section */}
          <div className="justify-center md:justify-start">
            <Image
              src={IMAGES.winebox}
              alt="Wine Box"
              width={1100}
              height={800}
              className="-mt-72"
            />
          </div>
        </div>
        {/* Right Text Content */}
        <div className="w-full text-center sm:text-left md:w-1/2 md:text-left">
          <div className="text-2xl font-bold text-vineogray  md:text-[2.5rem]">La esencia de Vineo</div>
          <div className="mt-4 text-lg text-vineoblack md:text-2xl">
            Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
