import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';
import { InputButton } from '../molecules/InputButton';

const NewsletterSection = () => {
  return (
    <div className="relative bg-white p-8 md:p-16 mb-20 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-cover bg-left bg-no-repeat bg-letter" ></div>

  
    <div className=" flex-2 flex-col items-center justify-center  ml-auto w-1/2 pl-8">
      <h1 className="text-3xl md:text-3xl md:text-center font-bold text-vineogray mb-4">
        No te pierdas ni una 
      </h1>
      <p className="text-lg md:text-lg md:text-center text-vineoblack mb-6">
        Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo
      </p>
      <div className="w-full flex justify-center">
    <InputButton placeholder="Enter your email" buttonText="Subscribe" />
  </div>
    </div>
  </div>
  
  );
};

export default NewsletterSection;
