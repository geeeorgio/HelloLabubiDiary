export const ICON_NAMES = [
  'about',
  'back',
  'info',
  'like',
  'mood',
  'quiz',
  'refresh',
  'share',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
