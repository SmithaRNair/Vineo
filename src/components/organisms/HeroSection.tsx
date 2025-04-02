'use client';
import React from 'react';

import TitlesButton from '../molecules/TitlesButton'; // Adjust the import path as necessary

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="bg-wines bg-cover bg-bottom bg-center  bg-no-repeat sm:bg-bottom md:bg-contain md:bg-right-bottom lg:bg-contain xl:bg-cover xl:bg-right-bottom">

        {/* Main Text */}
        <div className="ml-8 mt-12 flex-1 px-4 text-3xl text-[3.375rem] font-bold text-vineogray sm:text-2xl md:text-3xl lg:text-5xl">
          Descubre el vino perfecto para ti
        </div>
        {/* Left Side - Text and Button */}
        <div className="ml-12 max-w-xl flex-1 items-start text-vineogray sm:max-w-md md:max-w-xl">
          <TitlesButton
            subtitle="" // Optional: You can leave this empty or add a subtitle if needed
            paragraphs={[
              'Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas.',
              'Sorpréndete con nuevos sabores y experiencias inolvidables.',
            ]}
            paragraphClassNames={[
              'text-vineogray', // For the first paragraph
              'text-vineogray', // For the second paragraph
            ]}
            buttonText="Empieza"
            buttonLink="/start" // Adjust the link as necessary
            reverseLayout={false}
            showButton={true}
          />
        </div>
      </div>
    </section>

  );
};
// HeroSection.tsx
// 'use client';
// import React from 'react';

// export const HeroSection = () => {
//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 z-0 bg-wines bg-right bg-no-repeat bg-contain md:bg-cover" >
//       </div>

//       {/* Content container */}
//       <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
//         <div className="w-full md:w-1/2 lg:w-2/5 space-y-2">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Descubre el vino perfecto para ti
//           </h1>
//           <p className="text-lg text-gray-600">
//             Únete a Vinow, haz match con vinos que encajen con tus gustos en casa y nosotros nos encargamos del resto.
//           </p>
//           <p className="text-lg text-gray-600">
//             Sorpréndete con nuevos sabores y experiencias inolvidables.
//           </p>
//           <button className="bg-vineopink hover:bg-orange-300 text-white py-2 px-8 rounded-md transition duration-300">
//             Empezar
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
