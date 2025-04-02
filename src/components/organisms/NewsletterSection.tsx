import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

import { InputButton } from '../molecules/InputButton';

const NewsletterSection = () => {
  return (
    <div className="relative flex items-center bg-letter-gradient  p-8 md:p-16">
      {/* Flex container for image and text */}
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        {/* Image on the left */}
        <div className="size-full flex-1 md:mr-8">
          <Image
            src={IMAGES.letter}
            alt="Letter"
            width={1000}
            height={600}
            layout="intrinsic"
            className="size-full object-cover"
          />
        </div>

        {/* Text content on the right (centered) */}
        <div className="mt-36 flex flex-1 flex-col items-center justify-center text-center md:mt-40">
          <h1 className="mb-4 mt-10 font-Domine text-[3.5rem] font-bold text-vineogray">
            No te pierdas ni una
          </h1>
          <div className="two-line-text mb-6 font-Domine text-2xl font-normal  leading-relaxed text-vineoblack md:text-3xl">
            Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo
          </div>
          <div className="mt-12 flex w-full max-w-3xl justify-center border-b-gray-400">
            <InputButton placeholder="Enter your email" buttonText="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
