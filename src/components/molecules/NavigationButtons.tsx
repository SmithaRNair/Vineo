// src/components/NavigationButtons.tsx

import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswers: { [key: number]: string };
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  totalQuestions,
  selectedAnswers,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-6 flex justify-center gap-3 sm:gap-2 md:gap-0">
      <button
        onClick={onPrevious}
        disabled={currentQuestionIndex === 0}
        className={`${
          currentQuestionIndex === 0 ? 'text-vineopink' : 'text-red-400 hover:text-orange-400'
        } rounded-lg px-1 py-1 transition-all duration-300 focus:outline-none`}
      >
        <ChevronLeftIcon sx={{ fontSize: 40 }}/>
      </button>
      <button
        onClick={onNext}
        disabled={!selectedAnswers[currentQuestionIndex]} // Disable if no answer is selected
        className={`${
          !selectedAnswers[currentQuestionIndex] ? 'text-vineopink' : 'text-red-400 hover:text-orange-400]'
        } rounded-lg px-1 py-1 transition-all duration-300 focus:outline-none`}
      >
        <ChevronRightIcon sx={{ fontSize: 40 }} />
      </button>
    </div>
  );
};

export default NavigationButtons;
