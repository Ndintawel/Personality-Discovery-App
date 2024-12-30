export interface Question {
  id: number;
  text: string;
  options: Answer[];
}

export interface Answer {
  text: string;
  type: PersonalityType;
}

export type PersonalityType = 'adventurer' | 'thinker' | 'creator' | 'leader';

export interface PersonalityResult {
  type: PersonalityType;
  title: string;
  description: string;
  imageUrl: string;
}