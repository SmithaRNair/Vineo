import Image from 'next/image';
import React from 'react';

import type { Wine } from '@/types/WineTypes';

const renderStars = (rating: number) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {Array(filledStars).fill(0).map((_, index) => (
        <span key={`filled-${index}`} className="text-vineopink">★</span>
      ))}
      {hasHalfStar && (
        <span className="relative text-vineopink">
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            ★
          </span>
          <span className="text-gray-300">★</span>
        </span>
      )}
      {Array(emptyStars).fill(0).map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">★</span>
      ))}
    </>
  );
};

const WineCard = ({ wine }: { wine: Wine }) => (
  <div className="wine-item flex  shrink-0 flex-col items-center space-x-10">
    <Image
      src={wine.image}
      alt={wine.wine_name}
      layout="intrinsic"
      width={80}
      height={120}
      className="mb-2"

    />
    <div className="truncate font-inter text-25px text-lg font-medium text-vineopink lg:text-base  xl:text-base">
      {wine.wine_name}
    </div>
    <div className="truncate font-inter text-25px font-light text-vineogray md:text-base">
      {wine.area || 'Unknown region'}
    </div>
    <div className="mt-1 flex md:mt-2">
      <div className="ml-2">{renderStars(wine.rating || 0)}</div>
    </div>
  </div>
);

export default WineCard;
