import type { ImageSourcePropType } from 'react-native';

import type { FactCategoryKeys } from 'src/constants';

export type FactType = {
  id: string;
  text: string;
  isSaved: boolean;
};

export type FactsObjectListType = {
  category: FactCategoryKeys;
  facts: FactType[];
};

export type FactsCategoryType = Record<FactCategoryKeys, FactsObjectListType>;

export type QuizType = {
  id: string;
  question: string;
  options: string[];
  correctValue: string;
};

export type ThoughtsType = {
  id: string;
  text: string;
};

export type MoodType = {
  id: string;
  description: string;
};

export type FriendType = {
  title: string;
  description: string;
  btnText: string;
  image: ImageSourcePropType;
};
