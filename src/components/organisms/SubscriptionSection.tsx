// components/SubscriptionSection.tsx
'use client';
import React from 'react';
import TextButton from '../molecules/TextButton';
import SubscriptionCard from '../SubscriptionCard';

const SubscriptionSection: React.FC = () => {
  return (
    <div>
      {/* First part - Using TextButton component for introductory text */}
      <TextButton
        title="Elige el precio que mejor se adapte a ti"
        subtitle="Podrás cambiar tu suscripción en cualquier momento"
        paragraphs={[
          "Aquí te resolvemos tus dudas con cada plan. Cambia de plan en cualquier momento con la opción más flexible."
        ]}
        buttonText="Choose plan"
        buttonLink="#choose-plan"
        reverseLayout={true}
        showButton={false}
      />

      {/* Second part - Using SubscriptionCard for displaying the subscription plans */}
      <div className="flex justify-center space-x-6 mt-12">
        <SubscriptionCard
          title="90€"
          price="90€"
          description="Suscripción diaria"
          perks={[
            "Portafolio a medida",
            "1 caja de 3 vinos más según tus gustos",
            "Cancelación gratuita en cualquier momento"
          ]}
        />

        <SubscriptionCard
          title="200€"
          price="200€"
          description="Suscripción diaria"
          perks={[
            "Portafolio a medida",
            "1 caja de 3 vinos más según tus gustos",
            "Cancelación gratuita en cualquier momento"
          ]}
          isHighlighted={true} // Highlighted subscription plan
          renewalText="La suscripción se renueva en 50€/día"
        />

        <SubscriptionCard
          title="590€"
          price="590€"
          description="Suscripción diaria"
          perks={[
            "Portafolio a medida",
            "1 caja de 3 vinos más según tus gustos",
            "Cancelación gratuita en cualquier momento"
          ]}
        />
      </div>
    </div>
  );
};

export default SubscriptionSection;
