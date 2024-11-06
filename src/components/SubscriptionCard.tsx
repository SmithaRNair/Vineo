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
}) => {
  return (
    <div
      className={`rounded-lg border p-6 text-center shadow-lg ${
        isHighlighted ? 'bg-vineopink text-white' : 'bg-white text-gray-800'
      } flex h-full flex-col`}
      style={{
        backgroundColor: isHighlighted ? 'vineo' : 'white', // Set Vineo Regalo background color
      }}
    >
      <div className="flex-1">
        <div className={`${isHighlighted ? 'bg-gray-800 text-white' : 'text-gray-800'} rounded-t-lg py-2`}>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="mt-4 text-3xl font-bold">{price}</p>
        <p className="mt-2">{description}</p>
        {isHighlighted && (
          <p className="mt-2 text-sm">Tu amigo te ha regalado 6 meses de Vineo</p> // Additional highlighted text
        )}
        <ul className={`mt-4 space-y-2 text-left ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
          {perks.map((perk, index) => (
            <li key={index}>
              <span className={isHighlighted ? '' : 'text-red-500'}>✓</span>
              {' '}
              {perk}
            </li>
          ))}
        </ul>
      </div>
      {renewalText && isHighlighted && (
        <p className="mt-4 text-sm">{renewalText}</p> // Position renewal text at bottom for highlighted card
      )}
      {!isHighlighted && (
        <button className="mt-auto w-full rounded-md bg-gray-700 px-4 py-2 text-white">Cambiar</button>
      )}
    </div>
  );
};

export default SubscriptionCard;
