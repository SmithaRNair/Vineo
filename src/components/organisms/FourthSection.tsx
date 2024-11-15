'use client';
import React from 'react';
import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';

const FourthSection = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
  <div className="bg-[url('/path/to/background-1.png')] bg-cover min-h-screen px-8 py-12">
{/* El Algoritmo Section */}
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 my-12">
  {/* Text Content */}
  <div className="max-w-lg text-center md:text-left">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">El Algoritmo</h2>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      Cada vez que valoras un vino, mejora el algoritmo
    </h3>
    <p className="text-gray-600 mb-4">
      Nuestro algoritmo aprende con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.
    </p>
    <button className="bg-[#ff6f61] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#ff5c5c]">
      Comienza
    </button>
  </div>

  {/* Illustration/Graph Section */}
  <div className="w-80 h-96 bg-white shadow-md rounded-md flex items-center justify-center">
    <Image src={IMAGES.graph }
      alt="Algorithm Illustration"
      width={400} height={600}
    />
  </div>
</div>

{/* Tu Aprendizaje Section */}
<div className="flex flex-col md:flex-row items-center gap-8 my-12">
  {/* Card Image */}
  <div className="w-80 h-auto bg-white shadow-md rounded-md overflow-hidden">
    <Image
      src={IMAGES.bottleimg}
      alt="Bottle Information"
      width={400} height={600}
    />
  </div>

  {/* Text Content */}
  <div className="max-w-lg text-center md:text-left">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tu Aprendizaje</h3>
    <h4 className="text-xl font-semibold text-gray-700 mb-2">
      Aprende sobre vinos con cada caja
    </h4>
    <p className="text-gray-600 mb-4">
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
