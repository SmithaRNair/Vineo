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
      <div className="my-4 text-center font-inter font-medium text-gray-400">
        Apúntate a la lista y aprovéchate de la oferta de lanzamiento
      </div>
      <div className="mb-4 text-center font-inter font-normal text-gray-400">
        5€ de descuento PARA SIEMPRE
      </div>

      {/* Input and Button Section */}
      <div className="mb-8 w-full max-w-md font-Domine">
        <InputButton
          buttonText="Apúntate"
          onSubmit={handleEmailSubmit}
        />
      </div>
      <div className="text-center font-Domine font-bold text-vineogray">
        Cómo funciona
      </div>

      {/* Cards Section */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-10 px-12 font-Domine font-normal">
        <Button
          text="Contesta el cuestionario"
          variant="contained"
          color="orange"
          sx={{
            backgroundColor: '#F78A79', // Background color
            borderRadius: '15px', // Rounded corners
            border: '1px solid #E5535D', // Border color
            paddingTop: '17px', // Top padding
            paddingBottom: '17px', // Bottom padding
            paddingLeft: '60px', // Left padding
            paddingRight: '60px', // Right padding
            width: '416px', // Width
            height: '65px', // Height
            whiteSpace: 'nowrap', // Prevent text wrapping
          }}
        />

      </div>
    </div>
  );
};

export default LandingSection;
