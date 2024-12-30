import React, { useState } from 'react';
import { PersonalityType } from '../types';
import { questions, personalityResults } from '../data/quizData';
import { calculatePersonalityResult } from '../utils/quizLogic';
import { QuizProgress } from './QuizProgress';
import { QuizOption } from './QuizOption';
import { QuizResult } from './QuizResult';
import { motion } from 'framer-motion';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: PersonalityType) => {
    const newAnswers = [...answers, type];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(prev => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = personalityResults[calculatePersonalityResult(answers)];
    return <QuizResult result={result} onRestart={restart} />;
  }

  const question = questions[currentQuestion];

  return (
    <motion.div
      key={currentQuestion}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <QuizProgress current={currentQuestion} total={questions.length} />
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            onSelect={handleAnswer}
          />
        ))}
      </div>
    </motion.div>
  );
}