'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface TitlesButtonProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
  reverseLayout?: boolean;
  showButton?: boolean;
}

const TitlesButton: React.FC<TitlesButtonProps> = ({
  title,
  subtitle,
  paragraphs,
  buttonText,
  buttonLink,
  reverseLayout = false,
  showButton = true,
}) => {
  const router = useRouter();

  // Handle button click for navigation
  const handleButtonClick = () => {
    router.push(buttonLink);
  };

  return (
    <div
      className={`relative py-12 ${reverseLayout ? 'flex-row-reverse' : 'flex-row'} flex items-center justify-center bg-cover bg-center`}
    >
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-4xl text-white px-6 md:px-12">
        {/* Title with vineogray color and custom Tailwind typography classes */}
        <h2
          className="font-domine text-45px font-normal leading-[51.3px] text-left mb-6 text-vineogray"
        >
          {title}
        </h2>

        {/* Subtitle with bold style */}
        <h3
          className="font-domine text-45px font-bold leading-[51.3px] text-left mb-6 text-vineogray"
        >
          {subtitle}
        </h3>

        {/* Loop through paragraphs with custom color */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-domine text-32px font-normal leading-[36.48px] text-left  mb-4 text-[#18191A]"
          >
            {paragraph}
          </p>
        ))}

        {/* Conditionally render the button */}
        {showButton && (
          <button
            onClick={handleButtonClick}
            className="bg-vineopink text-white py-2 px-6 rounded-lg inline-block hover:bg-[#9c2b4b] transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default TitlesButton;
