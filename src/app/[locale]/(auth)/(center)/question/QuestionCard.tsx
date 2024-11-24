import React from 'react';

type QuestionCardProps = {
  title: string;
  description: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 w-[200px] h-[220px]  bg-[#FBF9F6] border-2 border-vineogray rounded-xl shadow-md shadow-vineogray transition-all duration-300 ease-in-out hover:bg-[#F8D4D9] hover:border-[#F78A79] hover:scale-105 hover:shadow-lg hover:shadow-[#F78A79]">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default QuestionCard;
