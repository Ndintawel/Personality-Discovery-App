import React from 'react';
import { motion } from 'framer-motion';
import { Answer } from '../types';

interface QuizOptionProps {
  option: Answer;
  onSelect: (type: string) => void;
}

export function QuizOption({ option, onSelect }: QuizOptionProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(option.type)}
      className="w-full p-4 text-left bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-indigo-300"
    >
      {option.text}
    </motion.button>
  );
}