import type { ImageSourcePropType } from 'react-native';

import type { MoodIdsTypes } from './mood';

export const MAIN_BACKGROUND = require('src/assets/images/bckgd/bckg.png');

export const CLOUD_FRAME = require('src/assets/images/bckgd/cloud_frame.png');
export const ITEM_FRAME = require('src/assets/images/bckgd/item_frame.png');

export const ONBD_IMAGES = {
  onbd1: require('src/assets/images/onbd/onbd_1.png'),
  onbd2: require('src/assets/images/onbd/onbd_2.png'),
  onbd3: require('src/assets/images/onbd/onbd_3.png'),
  onbd4: require('src/assets/images/onbd/onbd_4.png'),
};

export const ITEMS_IMAGES = {
  facts_img: require('src/assets/images/items/facts_rabbit.png'),
  quiz_start: require('src/assets/images/items/quiz_start.png'),
  mood_angry: require('src/assets/images/items/mood_angry.png'),
  mood_happy: require('src/assets/images/items/mood_happy.png'),
  mood_inspired: require('src/assets/images/items/mood_inspired.png'),
  mood_lazy: require('src/assets/images/items/mood_lazy.png'),
  mood_overthinking: require('src/assets/images/items/mood_overthinking.png'),
  mood_sad: require('src/assets/images/items/mood_sad.png'),
};

export const FRIENDS_IMAGES = {
  Nova: require('src/assets/images/items/nova.png'),
  Milo: require('src/assets/images/items/milo.png'),
  Rosie: require('src/assets/images/items/rosie.png'),
};

export const MOOD_IMAGES_MAP: Record<MoodIdsTypes, ImageSourcePropType> = {
  Angry: ITEMS_IMAGES.mood_angry,
  Happy: ITEMS_IMAGES.mood_happy,
  Sad: ITEMS_IMAGES.mood_sad,
  Overthinking: ITEMS_IMAGES.mood_overthinking,
  Lazy: ITEMS_IMAGES.mood_lazy,
  Inspired: ITEMS_IMAGES.mood_inspired,
};
