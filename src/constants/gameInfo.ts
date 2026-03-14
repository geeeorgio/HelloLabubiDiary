import { FRIENDS_IMAGES } from './images';

import type { FriendType } from 'src/types';

export const ONBOARDING_INFO = {
  onboarding1: {
    title: 'Meet Zest !',
    description:
      'Zest is a moody fruit that loves to play and share his thoughts with you.',
    btnText: 'Next',
    dot_index: 0,
  },
  onboarding2: {
    title: 'Get His Thoughts',
    description:
      'Tap to hear what Zest is thinking today. Short, honest thoughts.',
    btnText: 'Next',
    dot_index: 1,
  },
  onboarding3: {
    title: 'Pick a Mood !',
    description:
      'Happy? Sad? Overthinking? \n Zest understands — and he has something to say.',
    btnText: 'Choose Mood',
    dot_index: 2,
  },
  onboarding4: {
    title: 'Share the Magic',
    description:
      'Save your favorite thoughts and send a Zest mood energy to someone you love.',
    btnText: 'Start',
    dot_index: 3,
  },
};

export const ABOUT_SCREEN_INFO = {
  title: 'Meet Zest',
  description:
    'Zest is a moody fruit that loves to play and share his thoughts with you. \nHe feels deeply. He overthinks sometimes. \nAnd he believes every day holds a bit of magic.',

  container_text: 'See what Zest is thinking',
  btnText: 'See!',
};

export const MOOD_SCREEN_INFO = {
  title: 'Choose your mood',
  description:
    'Tell Zest how you feel, and he will share a gentle thought just for you.',
};

export const FRIENDS_SCREEN_INFO = {
  title: 'Zest’s Friends',
  description:
    'Meet Zest’s friends and receive a tiny mission from them each day.',
};

export const MILO_INFO: FriendType = {
  title: 'Duke',
  description:
    'Duke is calm, thoughtful, and observant.\nHe notices the small details and helps you slow down when everything feels loud.\n\nHe believes in deep breaths, quiet strength, and gentle boundaries.\n\nHis missions are mindful — small pauses that bring clarity.\n\nDuke helps you think before you move.',
  btnText: 'Get a mission from',
  image: FRIENDS_IMAGES.Milo,
};

export const ROSIE_INFO: FriendType = {
  title: 'Berry',
  description:
    'Berry is confident and warm.\nShe believes you deserve space, attention, and courage.\nShe pushes you to try, speak up, and act — even if you feel unsure.\n\nHer missions are brave little steps forward.\n\nBerry helps you move without fear.',
  btnText: 'Get a mission from',
  image: FRIENDS_IMAGES.Rosie,
};

export const NOVA_INFO: FriendType = {
  title: 'Archie',
  description:
    'Archie is intuitive, creative, and a little mysterious.\nHe feels deeply but hides it behind a playful smirk.\nHe understands overthinking, late-night thoughts, and quiet dreams.\n\nHis missions are reflective — notice your feelings, protect your energy, trust your instincts.\n\nArchie helps you feel without judgment.',
  btnText: 'Get a mission from',
  image: FRIENDS_IMAGES.Nova,
};

export const FRIENDS_LIST: FriendType[] = [
  { ...MILO_INFO },
  { ...ROSIE_INFO },
  { ...NOVA_INFO },
];
