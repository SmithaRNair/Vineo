// components/SubscriptionCard.tsx

import React from 'react';

type SubscriptionCardProps = {
  title: string;
  price: string;
  description: string;
  perks?: string[];
  renewalText?: string;
  isHighlighted?: boolean;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  description,
  perks = [],
  renewalText,
  isHighlighted = false,
  buttonText = 'Cambiar',
}) => {
  return (
    <div
      className={`rounded-lg border p-6 text-center shadow-lg flex h-full flex-col ${
        isHighlighted ? 'bg-vineopink text-white border-none' : 'bg-white text-gray-800 border-gray-200'
      }`}
    >
      <div className="flex-1">
        {/* Card Header */}
        <div className={`rounded-t-lg py-2 ${isHighlighted ? 'bg-gray-800 text-white' : 'text-gray-800'}`}>
          <h3 className="text-lg font-bold ">{title}</h3>
        </div>

        {/* Price */}
        <p className="mt-4 text-3xl font-bold">{price}</p>
        
        {/* Description */}
        <p className="mt-2">{description}</p>

        {/* Additional text for highlighted card */}
        {isHighlighted && (
          <p className="mt-2 text-sm font-semibold">Tu amigo te ha regalado 6 meses de Vineo</p>
        )}

        {/* Perks List */}
        <ul className={`mt-4 space-y-2 text-left ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
          {perks.map((perk, index) => (
            <li key={index}>
              <span className={isHighlighted ? 'text-white' : 'text-red-500'}>✓</span> {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Renewal text for highlighted card */}
      {renewalText && isHighlighted && (
        <p className="mt-4 text-sm">{renewalText}</p>
      )}

      {/* Change button, hidden for highlighted card */}
      {!isHighlighted && (
        <button className="mt-auto w-full rounded-md bg-gray-700 px-4 py-2 text-white">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SubscriptionCard;
