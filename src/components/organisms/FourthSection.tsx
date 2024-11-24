'use client';
import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';

const FourthSection = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="min-h-screen bg-[url('/path/to/background-1.png')] bg-cover px-8 py-12">
      {/* El Algoritmo Section */}
      <div className="my-12 flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Text Content (Left Portion Larger) */}
        <div className="max-w-lg text-center md:w-2/3 md:text-left">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">El Algoritmo</h2>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Cada vez que valoras un vino, mejora el algoritmo
          </h3>
          <p className="mb-4 text-gray-600">
            Nuestro algoritmo aprende con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.
          </p>
          <button className="rounded-md bg-[#ff6f61] px-6 py-2 font-semibold text-white hover:bg-[#ff5c5c]">
            Comienza
          </button>
        </div>

        {/* Illustration/Graph Section (Smaller Portion) */}
        <div className="ml-36 mr-0 flex h-96 w-80 items-center justify-center rounded-md bg-white shadow-md md:w-1/3">
          <Image src={IMAGES.graph} alt="Algorithm Illustration" width={300} height={300} />
        </div>
      </div>

      {/* Tu Aprendizaje Section */}
      <div className="my-12 flex flex-col items-center gap-8 md:flex-row">
        {/* Card Image (Smaller Portion) */}
        <div className="h-auto w-80 overflow-hidden rounded-md bg-white shadow-md md:w-1/3">
          <Image src={IMAGES.bottleimg} alt="Bottle Information" width={400} height={600} />
        </div>

        {/* Text Content (Left Portion Larger) */}
        <div className="max-w-lg text-center md:w-2/3 md:text-left">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Tu Aprendizaje</h3>
          <h4 className="mb-2 text-xl font-semibold text-gray-700">
            Aprende sobre vinos con cada caja
          </h4>
          <p className="mb-4 text-gray-600">
            Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.
          </p>
          <p className="text-gray-600">
            Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
