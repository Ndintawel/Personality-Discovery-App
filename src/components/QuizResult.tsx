import React from 'react';
import { motion } from 'framer-motion';
import { PersonalityResult } from '../types';

interface QuizResultProps {
  result: PersonalityResult;
  onRestart: () => void;
}

export function QuizResult({ result, onRestart }: QuizResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <img
        src={result.imageUrl}
        alt={result.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">{result.title}</h2>
      <p className="text-gray-700 text-lg mb-6">{result.description}</p>
      <button
        onClick={onRestart}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Take Quiz Again
      </button>
    </motion.div>
  );
}