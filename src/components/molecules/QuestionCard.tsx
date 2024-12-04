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
      className={`p-2 w-[230px] h-[270px] bg-[#FBF9F6]  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-[#F8D4D9] hover:border-[#F78A79] hover:scale-105 hover:shadow-lg 
      ${isSelected ? 'border-[#F4B6B3] bg-[#ebc2c0]' : 'border-gray-300 bg-white'} 
      cursor-pointer`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default QuestionCard;
