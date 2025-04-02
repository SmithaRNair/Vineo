import React from 'react';

const WineHeroSection = () => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center bg-wines" 
         style={{
           
           backgroundSize: "cover",
           backgroundPosition: "center right"
         }}>
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Text Content */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
            Descubre el vino perfecto para ti
          </h1>
          
          <p className="text-base md:text-lg text-gray-700">
            Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras 
            recomendaciones personalizadas.
          </p>
          
          <p className="text-base md:text-lg text-gray-700">
            Sorpréndete con nuevos sabores y experiencias inolvidables.
          </p>
          
          <button className="bg-[#F5876E] hover:bg-[#E7725A] text-white px-8 py-3 rounded-md 
            transition duration-300 inline-block mt-4">
            Empieza
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineHeroSection;