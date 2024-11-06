// pages/subscription.tsx

import React from 'react';
import Sidebar from 'src/components/Sidebar';
import SubscriptionCard from 'src/components/SubscriptionCard';

const SubscriptionPage = () => {
  // Data for subscription plans, can be fetched dynamically later
  const subscriptionPlans = [
    {
      title: 'Vineo Regalo',
      price: '0€',
      description: 'Vineo 6 meses',
      perks: ['Perfilado a medida', '1 caja de 3 vinos al mes según tus gustos', 'Cancelación gratuita en cualquier momento'],
      renewalText: 'Renueva el 27/04/2024',
      isHighlighted: true,
    },
    {
      title: 'Vineo Free',
      price: '0€/mes',
      description: 'Suscripción para embajadores',
      perks: ['Perfilado a medida', '1 caja de 3 vinos al mes según tus gustos', 'Cancelación gratuita en cualquier momento'],
    },
    {
      title: 'Vineo IA',
      price: '5€/mes',
      description: 'Suscripción a la IA de Vineo',
      perks: ['1 recomendación de 3 vinos al mes según tus gustos', 'Perfilado a medida', 'Cancelación gratuita en cualquier momento'],
    },
    {
      title: 'Vineo Box',
      price: '55€/mes',
      description: 'Suscripción con caja mensual',
      perks: ['Nuestra IA te enviará una caja con 3 vinos', 'Perfilado a medida', 'Cancelación gratuita en cualquier momento'],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar Section */}
      <div className="fixed z-10 h-full w-1/6 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="ml-[17%] flex-1 p-6">
        <div className="mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-700">Gestiona tu suscripción</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subscriptionPlans.map((plan, index) => (
              <SubscriptionCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                perks={plan.perks}
                renewalText={plan.renewalText}
                isHighlighted={plan.isHighlighted}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button className="rounded-md bg-red-300 px-6 py-3 font-semibold text-red-700 shadow-sm">
              Cancelar suscripción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
