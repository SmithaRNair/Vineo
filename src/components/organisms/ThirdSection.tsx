'use client';
import React from 'react';

import { IMAGES } from '@/constants/AppConst';
import Image from 'next/image';

const ThirdSection = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="bg-[url('/path/to/background-1.png')] bg-cover min-h-screen px-8 py-12">
       {/* El Proceso Section */}
       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 my-12">
         <Image src={IMAGES.boxgif} alt="boxgif" width={400} height={400}/>
        

         {/* Right Text Content */}
         <div className="max-w-lg text-center md:text-left">
           <h2 className="text-2xl font-bold text-gray-800 mb-4">El Proceso</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
             ¿Cómo encontramos los vinos perfectos para ti?
           </h3>
           <p className="text-gray-600 mb-4">
             Analizamos tus preferencias de vino a través de 18 aspectos clave. Luego, nuestro algoritmo determina la probabilidad de que te guste cada botella que incluiremos en cada caja.
           </p>
           <p className="text-gray-600 mb-6">
             Este valor se utiliza para seleccionar cuidadosamente las botellas de vino que incluiremos en tu caja.
           </p>
          <button className="bg-[#ff6f61] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#ff5c5c]">
             Comienza
           </button>
         </div>
       </div>

       {/* La esencia de Vineo Section */}
       <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
         <div className="flex-shrink-0">
           <Image
             src={IMAGES.winebox}
             alt="Wine Box"
             width={700} height={700}
           />
         </div>
         <div className="max-w-lg text-center md:text-left">
           <h3 className="text-xl font-semibold text-gray-800 mb-4">
             La esencia de Vineo
          </h3>
          <p className="text-gray-600">
             Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias.
          </p>
         </div>
       </div>
    </div> 

  );
};

export default ThirdSection;

