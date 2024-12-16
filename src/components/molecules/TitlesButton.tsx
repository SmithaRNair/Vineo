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
    <div  className={`relative w-full  mb-10 py-1 ${reverseLayout ? 'flex-row-reverse' : 'flex-row'} flex bg-cover`}>
      <div className="relative py-2 text-white w-fit">
        {/* Title with Figma font styles */}
        <h2
          className="font-Domine leading-relaxed mb-10 mt-14 text-left text-[2.8rem] font-normal  text-vineogray sm:text-2xl md:text-2xl lg:text-[2.8rem] "
          
        >
          {title}
        </h2>

        {/* Subtitle with Figma font styles */}
        <h3
          className="font-Domine leading-[3rem] mb-14 mt-7 text-left text-[2.8rem] font-bold text-vineogray sm:text-xl md:text-2xl lg:text-[2.8rem] lg:leading-[2.5rem]"
         
        >
          {subtitle}
        </h3>

        {/* Loop through paragraphs with Figma font styles */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`font-Domine mt-8 mb-4 text-lg font-normal text-vineoblack leading-relaxed sm:text-lg md:text-left md:text-xl lg:text-[2rem] max-w-fit ${paragraphClassNames[index] || ''}`}
          >
            {paragraph}
          </p>
        ))}

        {/* Conditionally render the button */}
        {showButton && (
          <button
            onClick={handleButtonClick}
            className="h-16 w-56 mb-48 font-Domine font-normal text-[1.68rem] rounded-xl mt-14 bg-vineopink px-10 py-3 text-white transition hover:bg-[#9c2b4b]"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default TitlesButton;