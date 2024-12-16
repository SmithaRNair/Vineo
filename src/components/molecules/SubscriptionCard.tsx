// components/SubscriptionCard.tsx

import React from 'react';

type SubscriptionCardProps = {
  title: string;
  price: string;
  description: string;
  perks?: string[];
  renewalText?: string;
  isHighlighted?: boolean;
  buttonText?: string;
  showCommandButton?: boolean; // New prop for the "Command" button

};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  description,
  perks = [],
  renewalText,
  isHighlighted = false,
  buttonText = 'Cambiar',
  showCommandButton = false,
}) => {
  return (
    <div
      className={`flex h-full w-96 flex-col items-start justify-start rounded-xl border p-12 text-left shadow-xl ${
        isHighlighted ? 'border-none bg-vineopink text-white' : 'border-gray-200 bg-white text-gray-800'
      }`}
    >
      {/* Card Header */}
      <div className={`flex w-full justify-center items-center rounded-t-lg py-2 ${isHighlighted ? 'bg-gray-800 text-white' : 'text-gray-800'}`}>
        <h3 className="mt-10 font-Domine text-4xl font-bold">{title}</h3>
      </div>

      {/* Price */}
      <p className="mt-10 font-Domine text-xl font-bold">{price}</p>

      {/* Description */}
      <p className="mt-10 font-Domine text-xl font-bold">{description}</p>

      {/* Perks List */}
      <ul className={`mt-4 space-y-2 ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center">
            <span className={isHighlighted ? 'text-white' : 'text-red-500'}>✓</span>
            {' '}
            {perk}
          </li>
        ))}
      </ul>

      {/* Renewal text for highlighted card */}
      {renewalText && isHighlighted && (
        <p className="mt-4 text-sm">{renewalText}</p>
      )}
      {showCommandButton && (
        <button className="mt-5 h-11 w-52 rounded-xl bg-vineogray py-2 text-white font-normal text-lg">
          Command
        </button>
      )}

      {/* Change button, hidden for highlighted card */}
      {!isHighlighted && (
        <div className="mt-5 w-full flex justify-center">
          <button className="h-11 w-52 py-2 font-normal text-lg rounded-xl bg-vineogray text-white">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;