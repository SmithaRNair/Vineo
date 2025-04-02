import React from 'react';

type SubscriptionCardProps = {
  title: string;
  price: string;
  description: string;
  perks?: string[];
  renewalText?: string;
  isHighlighted?: boolean;
  buttonText?: string;
  showCancelButton?: boolean; // Show cancel button for active plan
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  description,
  perks = [],
  renewalText,
  isHighlighted = false,
  buttonText = 'Cambiar',
  showCancelButton = false,
}) => {
  return (
    <div
      className={`flex h-full w-[24.5rem] flex-col items-start rounded-xl p-8 shadow-xl 
        ${isHighlighted ? 'bg-[#FA8072] text-white' : 'border border-gray-200 bg-white text-gray-800'}
      `}
    >
      {/* Card Header */}
      <div className="w-full flex justify-center">
        <h3 className={`font-Domine text-2xl font-bold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
      </div>

      {/* Price */}
      <p className="mt-3 text-3xl font-bold">{price}</p>

      {/* Description */}
      <p className="mt-2 text-lg">{description}</p>

      {/* Perks List */}
      <ul className={`mt-5 space-y-2 ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center">
            <span className={isHighlighted ? 'text-white' : 'text-green-500'}>✓</span>
            <span className="ml-2">{perk}</span>
          </li>
        ))}
      </ul>

      {/* Renewal Text */}
      {renewalText && isHighlighted && (
        <p className="mt-4 text-sm">{renewalText}</p>
      )}

      {/* Button Section */}
      <div className="mt-5 w-full flex justify-center">
        {!isHighlighted ? (
          <button className="h-11 w-52 py-2 text-lg font-normal rounded-xl bg-vineopink text-white">
            {buttonText}
          </button>
        ) : (
          <p className="text-sm mt-2">Renovado el 27/06/2024</p>
        )}
      </div>

      {/* Cancel Subscription Button */}
      {showCancelButton && (
        <div className="mt-5 w-full flex justify-center">
          <button className="h-11 w-52 py-2 text-lg font-normal rounded-xl bg-red-500 text-white">
            Cancelar suscripción
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;
