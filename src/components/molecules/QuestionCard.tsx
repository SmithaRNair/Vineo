import React from 'react';

interface QuestionCardProps {
  title: string;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description, onClick, isSelected }) => {
  return (
    <div 
      onClick={onClick}
      role="button"  // Added role for better accessibility
      tabIndex={0}   // Make the card focusable
      className={`p-2 w-[210px] h-[230px] bg-[#FBF9F6] rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-ans-gradient hover:scale-105 hover:shadow-lg 
      ${isSelected ? 'bg-ans-gradient' : 'border-gray-300 bg-white'} 
      cursor-pointer`}
    >
      <h2 className="text-lg mt-2 mb-2 font-Lato font-semibold text-qntitle">{title}</h2>
      <p className='text-base font-Lato text-black font-normal'>{description}</p>
    </div>
  );
};

export default QuestionCard;

