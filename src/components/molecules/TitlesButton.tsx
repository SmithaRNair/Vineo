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
    <div
      className={`relative py-1 ${reverseLayout ? 'flex-row-reverse' : 'flex-row'} flex bg-cover`}
    >
      <div className="relative py-2 z-10 px-1  text-white md:px-2 ">
        {/* Title with Figma font styles */}
        <h2
          className="font-Domine mb-6 text-left text-2xl font-bold  text-vineogray sm:text-2xl md:text-2xl lg:text-2xl"
          
        >
          {title}
        </h2>

        {/* Subtitle with Figma font styles */}
        <h3
          className="font-Domine mb-6 text-left text-xl font-medium text-vineogray sm:text-xl md:text-2xl lg:text-2xl"
         
        >
          {subtitle}
        </h3>

        {/* Loop through paragraphs with Figma font styles */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-Domine  mb-7 text-lg font-normal text-vineoblack sm:text-lg  md:text-left md:text-xl lg:text-xl max-w-md"
            
          >
            {paragraph}
          </p>
        ))}

        {/* Conditionally render the button */}
        {showButton && (
          <button
            onClick={handleButtonClick}
            className="inline-block rounded-lg bg-vineopink px-6 py-2 text-white transition hover:bg-[#9c2b4b]"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default TitlesButton;
