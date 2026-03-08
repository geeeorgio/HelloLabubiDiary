import type { QuizType } from 'src/types';

export const GAME_QUIZ: QuizType[] = [
  {
    id: 'quiz_1',
    question: '',
    options: [''],
    correctValue: '',
  },
];

export const QUIZ_SCREEN_INFO = {
  title: 'How Well Do You Know Labubi?',
  description:
    '30 questions. \n\n 4 answer choices each. \n\n 20 seconds for every question.',
  more_info: 'Your final score will show how well you truly know her world.',
  btnText: 'Start Quiz',
};
