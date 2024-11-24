import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionOptionsGrid = () => {
  const questionOptions = [
    {
      title: 'Black and strong',
      description: 'Embracing the intensity of the dark side, with every galactic sip.',
    },
    {
      title: 'With milk and without sugar',
      description: 'Dairy balance in my cup, but always maintaining the natural sweetness.',
    },
    {
      title: 'With cream and/or sugar',
      description: 'Because life is short and there is always room for a little sweetness.',
    },
    {
      title: 'I don’t drink Coffee',
      description: 'I am more into recharging energy with photosynthesis and good humor.',
    },
  ];

  return (
    <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 justify-items-center">
      {questionOptions.map((option, index) => (
        <QuestionCard key={index} title={option.title} description={option.description} />
      ))}
    </div>
  );
};

export default QuestionOptionsGrid;
