'use client';
import { useGetQuestionsQuery } from '@app/redux/apiSlice';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import React, { useState } from 'react';

import { IMAGES } from '@/constants/AppConst';
import QuestionCard from './QuestionCard'; // Import the QuestionCard

const QuestionOptionsGrid: React.FC = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({}); // Store answers for each question
  const [isCompleted, setIsCompleted] = useState(false);

  // Handle loading state
  if (isLoading) {
    return <div>Loading questions...</div>;
  }

  // Handle error state
  if (error) {
    return (
      <div>
        <p>Error fetching questions.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  // If no questions or empty response
  if (!questions || questions.length === 0) {
    return <div>No questions available at the moment.</div>;
  }

  // Handle selection of an answer
  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer, // Store answer for the current question
    }));
  };

  // Handle navigation to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true); // Display congratulations after the last question
    }
  };

  // Handle navigation to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center font-Lato min-h-screen w-full">
      {/* Display Progress Bar just below the logo */}
      <div className="mt-0 w-full mb-4">
        {/* Background bar (gray) */}
        <div className="h-2 bg-gray-300 rounded-full w-full">
          {/* Progress bar (vineopink) */}
          <div
            className="h-2 bg-vineopink rounded-full"
            style={{
              width: `${progress}%`, // Dynamic width based on progress
            }}
          ></div>
        </div>
      </div>

      {/* Display current question */}
      <h1 className="mt-0 text-3xl text-logingray font-bold">{currentQuestionIndex+1}. {currentQuestion.question}</h1>

      {/* Icon Section */}
      <div className="mb-2 flex justify-center">
        <Image src={IMAGES.answer} alt="Icon" width={180} height={143} />
      </div>

      {/* Display answer options */}
      <div className="flex w-full flex-wrap justify-center gap-5">
        {currentQuestion.options.map((option: any) => (
          <QuestionCard
            key={option.id}
            title={option.option}
            description={option.description}
            onClick={() => handleAnswerSelection(option.option)}
            isSelected={selectedAnswers[currentQuestionIndex] === option.option}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex gap-8 justify-center">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          <ChevronLeftIcon fontSize="large" />
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswers[currentQuestionIndex]} // Disable if no answer is selected for the current question
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          <ChevronRightIcon fontSize="large" />
        </button>
      </div>

      {/* Display Congratulations after the last question */}
      {isCompleted && (
        <div className="mt-8 text-2xl font-bold text-green-500">
          Congratulations, you've completed the quiz!
        </div>
      )}
    </div>
  );
};

export default QuestionOptionsGrid;
