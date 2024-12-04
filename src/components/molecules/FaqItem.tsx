'use client';
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="text-lg font-bold text-vineogray">{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};

export default FaqItem;
