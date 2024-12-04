'use client';

import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import { Button } from '../atoms/Button';
import { IconTextCard } from '../molecules/IconTextCard';
import { InputButton } from '../molecules/InputButton';

const LandingSection = () => {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-beige p-8">
      {/* First Row: Text and Input Section */}
      {/* <div className=" mb-10 flex w-full max-w-md flex-col items-center font-Domine">
        {/* Input and Button Section */}
        {/* <div className="w-full px-4 sm:px-8 md:px-12">
          <InputButton buttonText="Apúntate" onSubmit={handleEmailSubmit} />
        </div> 
      </div> */}

      {/* Second Row: IconTextCards */}
      <div className="mt-24 w-full text-center font-Domine text-2xl font-bold text-vineogray sm:text-xl lg:text-2xl">
        Cómo funciona
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row">
        <IconTextCard
          iconSrc={IMAGES.vineoil}
          title="Contesta el cuestionario"
          description="Descubre tus preferencias vinícolas con solo 12 sencillas preguntas"
        />
        <IconTextCard
          iconSrc={IMAGES.answer}
          title="Descubre tus gustos"
          description="Nuestro sistema personalizado te brindará recomendaciones de vinos"
        />
        <IconTextCard
          iconSrc={IMAGES.bottle}
          title="Disfruta de la experiencia"
          description="Recibe vino a domicilio cada mes y cancela en cualquier momento"
        />
      </div>

      <div className="my-12 px-12 font-Domine font-normal">
       <button type="submit" className="w-full rounded-lg bg-vineopink px-4 py-2 font-Domine font-normal text-sm text-white transition hover:bg-red-400 md:text-lg whitespace-nowrap">Contesta el cuestinario</button>
      </div>
    </div>
  );
};

export default LandingSection;
