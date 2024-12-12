import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';
import { InputButton } from '../molecules/InputButton';

const NewsletterSection = () => {
  return (
    <div className="relative bg-white p-8 md:p-16 mb-20 flex items-center">
      {/* Flex container for image and text */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Image on the left */}
        <div className="flex-1 w-full h-full md:mr-8">
          <Image
            src={IMAGES.letter}
            alt="Letter"
            width={400}
            height={600}
            layout="intrinsic"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content on the right (centered) */}
        <div className="flex-1 flex flex-col items-center justify-center mt-36 md:mt-40">
          <h1 className="mt-10 text-[3.5rem] font-bold text-vineogray mb-4 text-center md:text-left">
            No te pierdas ni una
          </h1>
          <div className="text-2xl md:text-2xl text-vineoblack mt-14 mb-6 text-center md:text-left">
            Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo
          </div>
          <div className="flex justify-center md:justify-start">
            <InputButton placeholder="Enter your email" buttonText="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;