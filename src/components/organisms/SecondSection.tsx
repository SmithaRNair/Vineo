'use client';

import React from 'react';
import { InputButton } from '../molecules/InputButton';
import { IconTextCard } from '../molecules/IconTextCard';
import { Button } from "../atoms/Button"; 
import { IMAGES } from '@/constants/AppConst';

const LandingSection = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className='text-center font-inter font-medium text-gray-400'>
      Apúntate a la lista y aprovéchate de la oferta de lanzamiento
      </div>
      <div className='text-center font-inter font-thin text-gray-400'>
      5€ de descuento PARA SIEMPRE
      </div>

      {/* Input and Button Section */}
      <div className="mb-8 w-full max-w-md">
        <InputButton 
          buttonText="Apúntate"
          onSubmit={handleEmailSubmit}
        />
      </div>
      <div className='font-inter font-bold text-center text-gray-600'>
      Cómo funciona
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
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
      <Button
          text="Contesta el cuestinario"
          variant="contained"
          color="orange"
          sx={{
            Padding: "10px "
          }}

        />
    </div>
  );
};

export default LandingSection;
