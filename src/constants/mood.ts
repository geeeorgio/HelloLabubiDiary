import type { MoodType } from 'src/types';

export const HAPPY_MOOD: MoodType[] = [
  {
    id: 'happy_mood_1',
    description:
      'If you are happy, hold this feeling gently and don’t rush past it. \n Notice what made it appear. Small joys are not accidents — they are clues about what your heart truly needs.',
  },
  {
    id: 'happy_mood_2',
    description:
      'If you are happy, allow yourself to fully experience it without guilt. \n You don’t have to earn joy. Sometimes happiness is simply your natural state returning home.',
  },
  {
    id: 'happy_mood_3',
    description:
      'If you are happy, share a little piece of it. \n A kind word, a smile, a soft message — happiness grows when it moves.',
  },
  {
    id: 'happy_mood_4',
    description:
      'If you are happy, save this moment in your memory. \n One day, when things feel heavy, you’ll remember that light still exists.',
  },
  {
    id: 'happy_mood_5',
    description:
      'If you are happy, slow down. \n Joy feels deeper when you don’t hurry through it.',
  },
];

export const SAD_MOOD: MoodType[] = [
  {
    id: 'sad_mood_1',
    description:
      'If you are sad, don’t try to fix it immediately. \n Sit with it for a moment. Sadness is often just your heart asking to be heard.',
  },
  {
    id: 'sad_mood_2',
    description:
      'If you are sad, lower your expectations for today. \n It’s okay if all you do is breathe and exist.',
  },
  {
    id: 'sad_mood_3',
    description:
      'If you are sad, speak to yourself more softly. \n You deserve comfort, not criticism.',
  },
  {
    id: 'sad_mood_4',
    description:
      'If you are sad, remember that emotions move like weather. \n This feeling may stay for a while — but it will not stay forever.',
  },
  {
    id: 'sad_mood_5',
    description:
      'If you are sad, let yourself rest without explaining why. \n You don’t need a dramatic reason to feel heavy.',
  },
];

export const ANGRY_MOOD: MoodType[] = [
  {
    id: 'angry_mood_1',
    description:
      'If you are angry, pause before reacting. \n Anger often protects something more fragile underneath.',
  },
  {
    id: 'angry_mood_2',
    description:
      'If you are angry, ask yourself what boundary feels crossed. \n Your emotions are pointing at something important.',
  },
  {
    id: 'angry_mood_3',
    description:
      'If you are angry, move your body. \n Walk, stretch, breathe — let the fire flow instead of explode.',
  },
  {
    id: 'angry_mood_4',
    description:
      'If you are angry, avoid making permanent decisions in temporary heat. \n Clarity comes after calm.',
  },
  {
    id: 'angry_mood_5',
    description:
      'If you are angry, remember that strong emotions don’t make you bad. \n They make you human.',
  },
];

export const OVERTHINKING_MOOD: MoodType[] = [
  {
    id: 'overthinking_mood_1',
    description:
      'If you are overthinking, notice that your mind is trying to protect you. \n But not every thought needs your attention.',
  },
  {
    id: 'overthinking_mood_2',
    description:
      'If you are overthinking, shift your focus to something physical. \n Touch something real. Feel your breath. Come back to now.',
  },
  {
    id: 'overthinking_mood_3',
    description:
      'If you are overthinking, ask: \n “Is this helpful — or just loud?”',
  },
  {
    id: 'overthinking_mood_4',
    description:
      'If you are overthinking, remember that certainty is rare. \n Life is lived in movement, not in perfect clarity.',
  },
  {
    id: 'overthinking_mood_5',
    description:
      'If you are overthinking, give yourself a small decision to make. \n Action quiets spirals.',
  },
];

export const LAZY_MOOD: MoodType[] = [
  {
    id: 'lazy_mood_1',
    description:
      'If you feel lazy, maybe you are simply tired. \n Not all stillness is avoidance.',
  },
  {
    id: 'lazy_mood_2',
    description:
      'If you feel lazy, try one tiny action. \n Just one. Momentum often starts quietly.',
  },
  {
    id: 'lazy_mood_3',
    description:
      'If you feel lazy, check your energy — not your motivation. \n Your body may need care, not pressure.',
  },
  {
    id: 'lazy_mood_4',
    description:
      'If you feel lazy, forgive yourself for not being productive all the time. \n You are not a machine.',
  },
  {
    id: 'lazy_mood_5',
    description:
      'If you feel lazy, choose gentle progress instead of none. \n Small steps still count.',
  },
];

export const INSPIRED_MOOD: MoodType[] = [
  {
    id: 'inspired_mood_1',
    description:
      'If you feel inspired, write it down. \n Inspiration fades when not captured.',
  },
  {
    id: 'inspired_mood_2',
    description:
      'If you feel inspired, act on it quickly — even in a small way. \n Energy loves movement.',
  },
  {
    id: 'inspired_mood_3',
    description:
      'If you feel inspired, don’t wait for perfect conditions. \n Magic rarely waits for perfection.',
  },
  {
    id: 'inspired_mood_4',
    description:
      'If you feel inspired, protect this feeling from doubt. \n Not every idea needs immediate approval.',
  },
  {
    id: 'inspired_mood_5',
    description:
      'If you feel inspired, remember this spark came from inside you. \n You are capable of more than you think.',
  },
];

export const MOOD_IDS_LIST = [
  'Happy',
  'Sad',
  'Angry',
  'Overthinking',
  'Lazy',
  'Inspired',
] as const;

export type MoodIdsTypes = (typeof MOOD_IDS_LIST)[number];

export type MoodMapType = Record<MoodIdsTypes, MoodType[]>;

export const MOOD_MAP: MoodMapType = {
  Angry: ANGRY_MOOD,
  Happy: HAPPY_MOOD,
  Sad: SAD_MOOD,
  Overthinking: OVERTHINKING_MOOD,
  Lazy: LAZY_MOOD,
  Inspired: INSPIRED_MOOD,
};
