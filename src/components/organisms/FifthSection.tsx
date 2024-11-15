import React from 'react';

const FifthSection = () => {
  return (
    <div className="bg-white py-16 px-8">
      
      {/* Top Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Suba de nivel con cada caja
        </h2>
        <p className="text-gray-600 text-base">
          Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas
          con tus Vineo Coins
        </p>
      </div>

      {/* Bottom Section with Two Columns */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Column */}
        <div className="flex justify-center md:w-[48%]">
          {/* Adjusted height to 300px */}
          <div className="w-full h-[300px] bg-gray-200 border-4 border-dashed border-gray-300"></div>
        </div>

        {/* Right Column with Background Image */}
          <div
            className=" text-center relative bg-cover bg-center bg-bottleglass"
            
          >
          <h3 className="text-2xl text-left font-semibold text-gray-400 mb-2">Tus Beneficios</h3>
          <h4 className="text-xl text-left font-semibold text-gray-400 mb-4">Vineo Coins</h4>
          <p className="text-gray-600 text-left mb-4">
            Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas
          </p>
          <button className="bg-vineopink text-white py-2 px-6 rounded-lg text-lg hover:bg-orange-600 transition">
            Comienza
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
