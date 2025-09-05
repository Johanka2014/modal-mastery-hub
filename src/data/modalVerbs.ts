export interface ModalVerb {
  verb: string;
  meaning: string;
  usage: string;
  example: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'youtube-listening';
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation?: string;
  correctAnswer?: string;
  youtubeId?: string;
  lyrics?: {
    line: string;
    blanks: {
      position: number;
      answer: string;
      explanation?: string;
    }[];
  }[];
}

export const modalVerbs: ModalVerb[] = [
  {
    verb: "Can",
    meaning: "Ability, possibility, or permission",
    usage: "Express ability in the present or permission",
    example: "I can speak English fluently.",
    level: "beginner"
  },
  {
    verb: "Could", 
    meaning: "Past ability, polite requests, or possibility",
    usage: "Past tense of can, polite requests, or uncertain possibility",
    example: "Could you help me with this task?",
    level: "beginner"
  },
  {
    verb: "May",
    meaning: "Permission, possibility, or formal requests",
    usage: "Formal permission or expressing possibility",
    example: "May I borrow your pen?",
    level: "intermediate"
  },
  {
    verb: "Might",
    meaning: "Possibility or uncertainty",
    usage: "Express uncertain possibility or past possibility",
    example: "It might rain tomorrow.",
    level: "intermediate"
  },
  {
    verb: "Must",
    meaning: "Necessity, obligation, or strong probability",
    usage: "Express strong obligation or logical deduction",
    example: "Students must complete their homework.",
    level: "beginner"
  },
  {
    verb: "Should",
    meaning: "Advice, recommendation, or expectation",
    usage: "Give advice or express what is expected",
    example: "You should exercise regularly for good health.",
    level: "beginner"
  },
  {
    verb: "Will",
    meaning: "Future plans, predictions, or promises",
    usage: "Express future actions, willingness, or promises",
    example: "I will call you tomorrow morning.",
    level: "beginner"
  },
  {
    verb: "Would",
    meaning: "Conditional situations, polite requests, or past habits",
    usage: "Conditional statements, polite requests, or repeated past actions",
    example: "Would you like some coffee?",
    level: "intermediate"
  }
];

export const exercises: Exercise[] = [
  {
    id: "ex1",
    type: "multiple-choice",
    question: "I _____ speak three languages fluently.",
    options: [
      { id: "a", text: "can", isCorrect: true },
      { id: "b", text: "must", isCorrect: false },
      { id: "c", text: "should", isCorrect: false },
      { id: "d", text: "might", isCorrect: false }
    ],
    explanation: "'Can' expresses ability. When talking about skills you possess, 'can' is the correct choice."
  },
  {
    id: "ex2", 
    type: "multiple-choice",
    question: "Students _____ wear uniforms to school.",
    options: [
      { id: "a", text: "can", isCorrect: false },
      { id: "b", text: "must", isCorrect: true },
      { id: "c", text: "might", isCorrect: false },
      { id: "d", text: "could", isCorrect: false }
    ],
    explanation: "'Must' expresses strong obligation or necessity. School rules typically require uniforms, making this the correct choice."
  },
  {
    id: "ex3",
    type: "multiple-choice", 
    question: "_____ you help me carry these boxes?",
    options: [
      { id: "a", text: "Must", isCorrect: false },
      { id: "b", text: "Should", isCorrect: false },
      { id: "c", text: "Could", isCorrect: true },
      { id: "d", text: "Will", isCorrect: false }
    ],
    explanation: "'Could' is used for polite requests. It's more polite than 'can' when asking for help."
  },
  {
    id: "ex4",
    type: "multiple-choice",
    question: "It _____ be sunny tomorrow, but I'm not sure.",
    options: [
      { id: "a", text: "must", isCorrect: false },
      { id: "b", text: "will", isCorrect: false }, 
      { id: "c", text: "might", isCorrect: true },
      { id: "d", text: "should", isCorrect: false }
    ],
    explanation: "'Might' expresses uncertainty or possibility. When you're not sure about something, 'might' is appropriate."
  },
  {
    id: "ex5",
    type: "multiple-choice",
    question: "You _____ eat more vegetables for better health.",
    options: [
      { id: "a", text: "could", isCorrect: false },
      { id: "b", text: "should", isCorrect: true },
      { id: "c", text: "must", isCorrect: false },
      { id: "d", text: "might", isCorrect: false }
    ],
    explanation: "'Should' gives advice or recommendations. It suggests what would be good to do without being as strong as 'must'."
  },
  {
    id: "ex6",
    type: "multiple-choice",
    question: "_____ I borrow your textbook for the weekend?",
    options: [
      { id: "a", text: "Should", isCorrect: false },
      { id: "b", text: "Must", isCorrect: false },
      { id: "c", text: "May", isCorrect: true },
      { id: "d", text: "Will", isCorrect: false }
    ],
    explanation: "'May' is used for formal permission requests. It's more formal than 'can' when asking for permission."
  },
  {
    id: "ex7",
    type: "multiple-choice",
    question: "When I was young, I _____ play piano beautifully.",
    options: [
      { id: "a", text: "can", isCorrect: false },
      { id: "b", text: "could", isCorrect: true },
      { id: "c", text: "should", isCorrect: false },
      { id: "d", text: "must", isCorrect: false }
    ],
    explanation: "'Could' expresses past ability. It's the past tense of 'can' when talking about abilities you had before."
  },
  {
    id: "ex8",
    type: "multiple-choice",
    question: "I _____ finish this project by Friday.",
    options: [
      { id: "a", text: "might", isCorrect: false },
      { id: "b", text: "should", isCorrect: false },
      { id: "c", text: "will", isCorrect: true },
      { id: "d", text: "could", isCorrect: false }
    ],
    explanation: "'Will' expresses future intention or promise. It shows determination and commitment to complete the task."
  }
];

export const youtubeExercise: Exercise = {
  id: "youtube1",
  type: "youtube-listening",
  question: "Listen to Billie Eilish's 'everything i wanted' and fill in the missing modal verbs:",
  options: [], // Not used for this type
  youtubeId: "qCTMq7xvdXU",
  lyrics: [
    {
      line: "I had a dream",
      blanks: []
    },
    {
      line: "I got everything I wanted",
      blanks: []
    },
    {
      line: "Not what you'd think",
      blanks: []
    },
    {
      line: "And if I'm being honest",
      blanks: []
    },
    {
      line: "It ___ have been a nightmare",
      blanks: [{ position: 3, answer: "might", explanation: "'Might' expresses uncertainty or possibility about past events." }]
    },
    {
      line: "To anyone who ___ care",
      blanks: [{ position: 3, answer: "might", explanation: "'Might' expresses uncertainty or possibility about past events." }]
    },
    {
      line: "'I thought I ___ fly",
      blanks: [{ position: 15, answer: "could", explanation: "'Could' expresses past ability or possibility that was believed to be true." }]
    },
    {
      line: "So I stepped off the Golden",
      blanks: []
    },
    {
      line: "Nobody cried",
      blanks: []
    },
    {
      line: "Nobody even noticed",
      blanks: []
    },
    {
      line: "I saw them standing right there",
      blanks: []
    },
    {
      line: "Kinda thought they ___ care",
      blanks: [{ position: 18, answer: "might", explanation: "'Might' expresses a weak possibility or hope about others' reactions." }]
    },
    {
      line: "I had a dream",
      blanks: []
    },
    {
      line: "I got everything I wanted",
      blanks: []
    },
    {
      line: "But when I wake up, I see",
      blanks: []
    },
    {
      line: "You with me",
      blanks: []
    },
    {
      line: "And you say, As long as I'm here",
      blanks: []
    },
    {
      line: "No one can hurt you",
      blanks: []
    },
    {
      line: "Don't wanna lie here",
      blanks: []
    },
    {
      line: "But you can learn to",
      blanks: []
    },
    {
      line: "If I ___ change",
      blanks: [{ position: 15, answer: "could", explanation: "'Could' expresses past ability or possibility that was believed to be true." }]
    },
    {
      line: "The way that you see yourself",
      blanks: []
    },
    {
      line: "You wouldn't wonder why you hear",
      blanks: []
    },
    {
      line: "They don't deserve you",
      blanks: []
    },
    {
      line: "I tried to scream",
      blanks: []
    },
    {
      line: "but my head was underwater",
      blanks: []
    },
    {
      line: "They called me weak",
      blanks: []
    },
    {
      line: "Like I'm not somebody's daughter",
      blanks: []
    },
    {
      line: "It ___ have been a nightmare",
      blanks: [{ position: 3, answer: "might", explanation: "'Might' expresses uncertainty or possibility about past events." }]
    },
    {
      line: "But it felt like they were right there",
      blanks: []
    },
    {
      line: "And it feels like yesterday was a year ago",
      blanks: []
    },
    {
      line: "But I don't wanna let anybody know",
      blanks: []
    },
    {
      line: "'Cause everybody wants something from me now",
      blanks: []
    },
    {
      line: "And I don't wanna let 'em down",
      blanks: []
    },
    {
      line: "I had a dream",
      blanks: []
    },
    {
      line: "I got everything I wanted",
      blanks: []
    },
    {
      line: "But when I wake up, I see",
      blanks: []
    },
    {
      line: "You with me",
      blanks: []
    },
    {
      line: "I had a dream",
      blanks: []
    },
    {
      line: "I got everything I wanted",
      blanks: []
    },
    {
      line: "But when I wake up, I see",
      blanks: []
    },
    {
      line: "You with me",
      blanks: []
    },
    {
      line: "And you say, As long as I'm here",
      blanks: []
    },
    {
      line: "No one can hurt you",
      blanks: []
    },
    {
      line: "Don't wanna lie here",
      blanks: []
    },
    {
      line: "But you can learn to",
      blanks: []
    },
    {
      line: "If I ___ change",
      blanks: [{ position: 15, answer: "could", explanation: "'Could' expresses past ability or possibility that was believed to be true." }]
    },
    {
      line: "The way that you see yourself",
      blanks: []
    },
    {
      line: "You wouldn't wonder why you hear",
      blanks: []
    },
    {
      line: "They don't deserve you",
      blanks: []
    },
    
    {
      line: "If I knew it all then would I do it again?'",
      blanks: []
    },
    {
      line: "Would I do it again?",
      blanks: []
    },
    {
      line: "If they knew what they said would go straight to my head",
      blanks: []
    },
    {
      line: "What would they say instead?",
      blanks: []
    },
    {
      line: "If I knew it all then would I do it again?",
      blanks: []
    },
    {
      line: "Would I do it again?",
      blanks: []
    },
    {
      line: "If they knew what they said would go straight to my head",
      blanks: []
    },
    {
      line: "What would they say instead?",
      blanks: []
    }
  ]
};
