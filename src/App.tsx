import React from 'react';
import Quiz from './components/Quiz';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Personality Discovery Quiz</h1>
            <Sparkles className="w-8 h-8 text-indigo-600" />
          </div>
          <p className="text-gray-600 text-lg">
            Answer a few questions to discover your personality type!
          </p>
        </div>
        
        <Quiz />
      </div>
    </div>
  );
}

export default App;