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
    <div className="flex min-h-screen flex-col items-center bg-beige p-8">
      {/* First Row: Text and Input Section */}
      <div className=" mb-10 mt-14 flex w-full max-w-full flex-col items-center ">
        <div className="text-5xl mb-6 font-inter font-normal text-vineogray ">Apúntate a la lista y aprovéchate de la oferta de lanzamiento</div>
        <div className="mt-12 text-3xl font-inter font-light text-blackcolo">5€ de descuento PARA SIEMPRE</div>
        
      </div>
      {/* Input and Button Section (Centered) */}
      {/* <div className="flex w-full justify-center px-4  mt-2 mb-12 sm:px-8 md:px-12">
        <InputButton buttonText="Apúntate" onSubmit={handleEmailSubmit} inputHeight="h-20" inputWidth='w-full' buttonWidth='w-36'/>     
      </div> */}
      {/* Second Row: IconTextCards */}
      <div className=" w-full  text-center font-Domine text-5xl font-bold text-vineogray sm:text-xl lg:text-5xl">
        Cómo funciona
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex w-full flex-col bg-cardgrad justify-center gap-10 sm:flex-row">
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
          description="Recibe vino a domicilio cada mes y cancela en cualquier momento"
        />
      </div>

      <div className="my-12 px-12 font-Domine font-normal">
        <button type="submit" className="w-full whitespace-nowrap rounded-lg bg-vineopink px-7 py-2 font-Domine text-sm font-normal text-white transition hover:bg-red-400 md:text-lg">Contesta el cuestinario</button>
      </div>
    </div>
  );
};

export default LandingSection;
