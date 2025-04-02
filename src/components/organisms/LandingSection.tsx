'use client';

import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import { IconTextCard } from '../molecules/IconTextCard';
import { InputButton } from '../molecules/InputButton';

const LandingSection = () => {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex h-fit flex-col items-center bg-beige w-full overflow-x-hidden ">
      {/* Section Title */}
      <div className="w-full mt-[41rem] mb-12 text-center font-Domine text-3xl font-bold text-vineogray sm:text-4xl md:text-5xl lg:text-6xl">
        Cómo funciona
      </div>

      {/* Cards Section */}
      <div className="mt-12 mb-10 flex w-full flex-col gap-[5rem]  justify-center sm:flex-col sm: items-center  md:flex-col md: items-center lg:gap-[2rem] px-4  lg:flex-row lg:items-center">
        <IconTextCard
          iconSrc={IMAGES.vineoil}
          title="Contesta el cuestionario"
          description="Descubre tus preferencias vinícolas con solo 12 sencillas preguntas"
        />
        <IconTextCard
          iconSrc={IMAGES.answer}
          title="Descubre tus gustos"
          description="Nuestro sistema personalizado te brindará recomendaciones de vinos acordes a tus gustos y preferencias únicas"
        />
        <IconTextCard
          iconSrc={IMAGES.bottle}
          title="Disfruta de la experiencia"
          description="Prepárate para descubrir vino cada mes. Cancela en cualquier momento"
        />
      </div>

      {/* Responsive Button Section */}
      <div className="my-12 px-4 sm:px-8 md:px-12 lg:px-20 flex justify-center">
        <button
          type="submit"
          className="w-full max-w-[90%] sm:max-w-[416px] h-16 mb-28 whitespace-nowrap rounded-xl bg-vineopink px-6 py-2 font-Domine text-xl font-normal text-white transition hover:bg-red-400 sm:text-2xl md:text-3xl lg:text-[1.68rem]"
        >
          Contesta el cuestionario
        </button>
      </div>
    </div>
  );
};

export default LandingSection;
