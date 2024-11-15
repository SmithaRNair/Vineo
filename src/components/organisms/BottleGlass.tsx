// pages/LandingPage.tsx
'use client';
import React from 'react';
import TextButton from '../molecules/TextButton';

const BottleGlass: React.FC = () => {
  return (
    <div>
      {/* Section 1 */}
      <TextButton
        title="Sube de nivel con cada caja"
        paragraphs={[
          "Invita a amigos, valora tus vinos y accede a descuentos y ventajas únicas con tus Vineo Coins"
        ]}
        buttonText="Comienza"
        buttonLink="#comienza" 
        showButton = {false}
        
      />
      
      {/* Section 2 */}
      <TextButton
        title="Tus Beneficios"
        subtitle="Vineo Coins"
        paragraphs={[
          "Las Vineo Coins te permitirán acceder a descuentos exclusivos, vinos premium y experiencias únicas."
        ]}
        buttonText="Comienza"
        buttonLink="#comienza" // Link to another page or section
        showButton={true} // Button will be visible in this section
      />
    </div>
  );
};

export default BottleGlass;
