import React from 'react';

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 mt-4 py-4">
      <div
        className="flex justify-between text-vineogray items-center cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-2xl my-10 font-Domine font-semibold">{question}</h3>
        <span
          className={`text-7xl font-normal text-vineogray transform transition-transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="flex justify-start  mt-2 font-Domine font-normal text-[1rem] text-vineoblack">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;