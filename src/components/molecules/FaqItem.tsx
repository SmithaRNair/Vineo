import React from 'react';

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-3xl font-Domine font-semibold">{question}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="flex justify-start  mt-2 font-Domine font-normal text-sm ">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;