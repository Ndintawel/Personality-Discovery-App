import { PersonalityType } from '../types';

export function calculatePersonalityResult(answers: PersonalityType[]): PersonalityType {
  const counts = answers.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<PersonalityType, number>);
  
  return Object.entries(counts).reduce((a, b) => 
    counts[a] > counts[b[0]] ? a : b[0]
  , 'adventurer' as PersonalityType);
}