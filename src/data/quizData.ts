import { Question, PersonalityResult } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically start your day?",
    options: [
      { text: "With an adventurous workout or outdoor activity", type: "adventurer" },
      { text: "Reading news or educational content", type: "thinker" },
      { text: "Sketching or journaling", type: "creator" },
      { text: "Planning the day's objectives", type: "leader" }
    ]
  },
  {
    id: 2,
    text: "What's your approach to solving problems?",
    options: [
      { text: "Jump in and learn by doing", type: "adventurer" },
      { text: "Analyze all possible solutions", type: "thinker" },
      { text: "Think outside the box", type: "creator" },
      { text: "Gather a team and delegate", type: "leader" }
    ]
  },
  {
    id: 3,
    text: "In a group project, what role do you naturally take?",
    options: [
      { text: "The one who suggests exciting new approaches", type: "adventurer" },
      { text: "The one who researches and analyzes", type: "thinker" },
      { text: "The one who brings creative solutions", type: "creator" },
      { text: "The one who coordinates and directs", type: "leader" }
    ]
  },
  {
    id: 4,
    text: "What's your ideal vacation?",
    options: [
      { text: "Backpacking through unknown territories", type: "adventurer" },
      { text: "Cultural tours and museums", type: "thinker" },
      { text: "Art retreats or photography trips", type: "creator" },
      { text: "Luxury resorts with planned activities", type: "leader" }
    ]
  },
  {
    id: 5,
    text: "How do you prefer to learn new things?",
    options: [
      { text: "Through hands-on experience", type: "adventurer" },
      { text: "Through research and reading", type: "thinker" },
      { text: "Through visual demonstrations", type: "creator" },
      { text: "Through discussion and debate", type: "leader" }
    ]
  },
  {
    id: 6,
    text: "What's your communication style?",
    options: [
      { text: "Spontaneous and expressive", type: "adventurer" },
      { text: "Thoughtful and precise", type: "thinker" },
      { text: "Visual and imaginative", type: "creator" },
      { text: "Direct and confident", type: "leader" }
    ]
  },
  {
    id: 7,
    text: "How do you handle stress?",
    options: [
      { text: "Go for an adventure or physical activity", type: "adventurer" },
      { text: "Analyze the situation and make a plan", type: "thinker" },
      { text: "Express yourself through art or music", type: "creator" },
      { text: "Take charge and tackle it head-on", type: "leader" }
    ]
  },
  {
    id: 8,
    text: "What's your ideal workspace like?",
    options: [
      { text: "Flexible and mobile", type: "adventurer" },
      { text: "Quiet and organized", type: "thinker" },
      { text: "Artistic and inspirational", type: "creator" },
      { text: "Professional and efficient", type: "leader" }
    ]
  },
  {
    id: 9,
    text: "How do you make important decisions?",
    options: [
      { text: "Trust your instincts", type: "adventurer" },
      { text: "Research thoroughly", type: "thinker" },
      { text: "Visualize possible outcomes", type: "creator" },
      { text: "Consider impact on goals", type: "leader" }
    ]
  },
  {
    id: 10,
    text: "What motivates you most?",
    options: [
      { text: "New experiences and challenges", type: "adventurer" },
      { text: "Learning and understanding", type: "thinker" },
      { text: "Self-expression and innovation", type: "creator" },
      { text: "Achievement and recognition", type: "leader" }
    ]
  },
  {
    id: 11,
    text: "How do you prefer to spend your free time?",
    options: [
      { text: "Exploring new places", type: "adventurer" },
      { text: "Reading or solving puzzles", type: "thinker" },
      { text: "Creating or crafting", type: "creator" },
      { text: "Networking or organizing events", type: "leader" }
    ]
  },
  {
    id: 12,
    text: "What's your approach to rules?",
    options: [
      { text: "Rules are meant to be challenged", type: "adventurer" },
      { text: "Rules need logical justification", type: "thinker" },
      { text: "Rules can limit creativity", type: "creator" },
      { text: "Rules help maintain order", type: "leader" }
    ]
  },
  {
    id: 13,
    text: "How do you handle unexpected changes?",
    options: [
      { text: "Embrace them as exciting opportunities", type: "adventurer" },
      { text: "Analyze their implications", type: "thinker" },
      { text: "Adapt with creative solutions", type: "creator" },
      { text: "Quickly reorganize and adjust", type: "leader" }
    ]
  },
  {
    id: 14,
    text: "What's your ideal career environment?",
    options: [
      { text: "Dynamic and ever-changing", type: "adventurer" },
      { text: "Research-focused and analytical", type: "thinker" },
      { text: "Creative and innovative", type: "creator" },
      { text: "Structured with growth opportunities", type: "leader" }
    ]
  },
  {
    id: 15,
    text: "How do you approach deadlines?",
    options: [
      { text: "Work in intense bursts of energy", type: "adventurer" },
      { text: "Plan and analyze thoroughly", type: "thinker" },
      { text: "Find innovative ways to complete tasks", type: "creator" },
      { text: "Create and follow a structured timeline", type: "leader" }
    ]
  },
  {
    id: 16,
    text: "What's your preferred way of celebrating success?",
    options: [
      { text: "Going on an adventure", type: "adventurer" },
      { text: "Quiet reflection and planning next steps", type: "thinker" },
      { text: "Creative expression or artistic pursuit", type: "creator" },
      { text: "Organizing a group celebration", type: "leader" }
    ]
  },
  {
    id: 17,
    text: "How do you prefer to influence others?",
    options: [
      { text: "Through exciting experiences", type: "adventurer" },
      { text: "Through logical arguments", type: "thinker" },
      { text: "Through creative inspiration", type: "creator" },
      { text: "Through direct guidance", type: "leader" }
    ]
  },
  {
    id: 18,
    text: "What's your approach to personal growth?",
    options: [
      { text: "Seeking new experiences", type: "adventurer" },
      { text: "Continuous learning and study", type: "thinker" },
      { text: "Exploring creative expression", type: "creator" },
      { text: "Setting and achieving goals", type: "leader" }
    ]
  },
  {
    id: 19,
    text: "How do you prefer to work on projects?",
    options: [
      { text: "With flexibility and spontaneity", type: "adventurer" },
      { text: "With thorough research and planning", type: "thinker" },
      { text: "With room for creative exploration", type: "creator" },
      { text: "With clear goals and deadlines", type: "leader" }
    ]
  },
  {
    id: 20,
    text: "What legacy do you want to leave?",
    options: [
      { text: "Inspiring others to explore and discover", type: "adventurer" },
      { text: "Contributing to knowledge and understanding", type: "thinker" },
      { text: "Creating something unique and meaningful", type: "creator" },
      { text: "Building lasting and impactful systems", type: "leader" }
    ]
  }
];

export const personalityResults: Record<PersonalityType, PersonalityResult> = {
  adventurer: {
    type: "adventurer",
    title: "The Adventurer",
    description: "You're a free spirit who thrives on new experiences and challenges. Your spontaneous nature and enthusiasm for life make you an inspiring presence to others. You learn best through direct experience and aren't afraid to take risks to achieve your goals.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  },
  thinker: {
    type: "thinker",
    title: "The Thinker",
    description: "You're a deep analytical soul who loves to understand how things work. Your intellectual curiosity and problem-solving abilities are your greatest strengths. You excel at research and analysis, always seeking to expand your knowledge and understanding.",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
  },
  creator: {
    type: "creator",
    title: "The Creator",
    description: "You're an artistic spirit with a unique vision. Your ability to think outside the box and bring new ideas to life sets you apart. You see the world through a lens of possibility and have a natural talent for innovative solutions.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
  },
  leader: {
    type: "leader",
    title: "The Leader",
    description: "You're a natural-born leader with excellent organizational skills. Your ability to inspire and guide others makes you an invaluable team player. You excel at setting goals and creating structured paths to achieve them.",
    imageUrl: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84"
  }
};