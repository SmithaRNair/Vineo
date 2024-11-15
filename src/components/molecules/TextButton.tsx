'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface TextButtonProps {
  title: string;
  paragraphs: string[]; // Array of paragraphs to handle varying amounts of content
  buttonText: string;
  buttonLink: string; // Link for the button, used for navigation
  reverseLayout?: boolean; // Optional flag to reverse the layout
  showButton?: boolean; // Flag to control visibility of the button
}

const TextButton: React.FC<TextButtonProps> = ({
  title,
  subtitle,
  paragraphs,
  buttonText,
  buttonLink,
  reverseLayout = false,
  showButton = true, // Default to true if not provided
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

      <div className="relative  z-10 max-w-4xl text-white px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-[#394A59] mb-6" style={{ fontFamily: 'Domine, serif' }}>
          {title}
        </h2>
        <h2 className="text-xl font-semibold text-[#394A59] mb-6" style={{ fontFamily: 'Domine, serif' }}>
          {subtitle}
        </h2>
        
        {/* Loop through paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg font-normal text-[#18191A] mb-4">
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

export default TextButton;
