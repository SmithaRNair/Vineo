'use client';
import React from 'react';
import { InputButton } from '../molecules/InputButton'; // Assuming InputButton is in the same directory

const NewsletterSection = () => {
  const handleSubmit = (email: string) => {
    console.log('Submitted email:', email);
    // Handle the submission (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center bg-white py-16 px-8">
      {/* Left Side: Background Image */}
      <div
        className="flex-1 bg-cover bg-left bg-no-repeat bg-letter"
        
      >
        {/* Optional additional content for the image section */}
      </div>

      {/* Right Side: Text and Input */}
      <div className="flex-1 pl-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          No te pierdas ni una
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo
        </p>
        <InputButton
          buttonText="Subscribe"
          onSubmit={handleSubmit}
          inputWidth="w-72" // Adjust width if necessary
          buttonWidth="w-32"
        />
      </div>
    </div>
  );
};

export default NewsletterSection;
