'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type TitlesButtonProps = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
  reverseLayout?: boolean;
  showButton?: boolean;
  paragraphClassNames?: string[];
  buttonClass?: string;
};

const TitlesButton: React.FC<TitlesButtonProps> = ({
  title,
  subtitle,
  paragraphs,
  buttonText,
  buttonLink,
  reverseLayout = false,
  showButton = true,
  paragraphClassNames = [],

}) => {
  const router = useRouter();

  // Handle button click for navigation
  const handleButtonClick = () => {
    router.push(buttonLink);
  };

  return (
    <div className={`relative w-full py-1 ${reverseLayout ? 'flex-row-reverse' : 'flex-row'} flex bg-cover`}>
      <div className="relative w-fit py-2 text-white">
        {/* Title with Figma font styles */}
        <div
          className="mb-10 mt-3 text-left font-Domine text-[2.8rem] font-normal leading-relaxed text-vineogray md:text-2xl lg:text-2xl"
        >
          {title}
        </div>

        {/* Subtitle with Figma font styles */}
        <div
          className="mb-10 mt-7 text-center font-Domine text-[2.8rem] font-bold leading-[3rem] text-vineogray sm:text-5xl sm:text-left md:text-3xl md:text-left lg:text-[2.8rem] lg:leading-10"
        >
          {subtitle}
        </div>

        {/* Loop through paragraphs with Figma font styles */}
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className={`mb-6 mt-12 max-w-fit font-Domine text-lg font-normal text-vineoblack sm:text-xl md:text-left md:text-xl lg:text-[2rem] lg:leading-10 ${paragraphClassNames[index] || ''}`}
          >
            {paragraph}
          </div>
        ))}

        {/* Conditionally render the button */}
        {showButton && (
          <button
            onClick={handleButtonClick}
            className="mb-32 mt-14 h-16 w-56 rounded-xl bg-vineopink px-10 py-3 font-Domine text-[1.68rem] font-normal text-white transition hover:bg-red-400"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default TitlesButton;
