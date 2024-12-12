// src/components/QuestionOptionsGrid.tsx

'use client';
import { useGetQuestionsQuery } from '@app/redux/apiSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js 13+ with App Router
import { IMAGES } from '@/constants/AppConst';
import ProgressBar from '../molecules/ProgressBar'; // Import ProgressBar component
import NavigationButtons from '../molecules/NavigationButtons'; // Import NavigationButtons component
import QuestionCard from '../molecules/QuestionCard';
import Congrats from '../molecules/Congrats';

const QuestionOptionsGrid: React.FC = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();
  const router = useRouter(); // Initialize useRouter hook for navigation

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (isLoading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error fetching questions.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return <div>No questions available at the moment.</div>;
  }

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer,  // This will update the answer for the current question index only
    }));
    handleNextQuestion(); // Move to next question immediately after answering


  };
  


  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
    } else {
      //setIsCompleted(true);
      router.push('/congrats');
      
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center gap-2 text-center font-Lato">
      <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />

      <h1 className="mt-5 text-2xl font-bold text-logingray">
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </h1>

      <div className="mb-2 flex justify-center">
        <Image src={IMAGES.answer} alt="Icon" width={180} height={143} />
      </div>

      <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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

      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        selectedAnswers={selectedAnswers}
        onPrevious={handlePreviousQuestion}
        onNext={handleNextQuestion}
      />

      {/* {isCompleted && (
        <div className="mt-8 text-2xl font-bold text-green-500">
          Congratulations, you've completed the quiz!
        </div>
      )} */}
    </div>
  );
};

export default QuestionOptionsGrid;
