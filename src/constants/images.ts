import type { ImageSourcePropType } from 'react-native';

import type { MoodIdsTypes } from './mood';

export const MAIN_BACKGROUND = require('src/assets/images/bckgd/bckgd.png');

export const CLOUD_FRAME = require('src/assets/images/bckgd/cloud_frame.png');
export const ITEM_FRAME = require('src/assets/images/bckgd/item_frame.png');

export const ONBD_IMAGES = {
  onbd1: require('src/assets/images/items/ace_2.png'),
  onbd2: require('src/assets/images/items/ace_3.png'),
  onbd3: require('src/assets/images/items/ace_1.png'),
  onbd4: require('src/assets/images/items/ace_4.png'),
};

export const ITEMS_IMAGES = {
  facts_img: require('src/assets/images/items/ace_5.png'),
  quiz_start: require('src/assets/images/items/ace_4.png'),
  mood_angry: require('src/assets/images/items/ace_3.png'),
  mood_happy: require('src/assets/images/items/ace_4.png'),
  mood_inspired: require('src/assets/images/items/ace_7.png'),
  mood_lazy: require('src/assets/images/items/ace_5.png'),
  mood_overthinking: require('src/assets/images/items/ace_8.png'),
  mood_sad: require('src/assets/images/items/ace_6.png'),
};

export const FRIENDS_IMAGES = {
  Nova: require('src/assets/images/items/kai.png'),
  Milo: require('src/assets/images/items/melo.png'),
  Rosie: require('src/assets/images/items/zara.png'),
};

export const MOOD_IMAGES_MAP: Record<MoodIdsTypes, ImageSourcePropType> = {
  Angry: ITEMS_IMAGES.mood_angry,
  Happy: ITEMS_IMAGES.mood_happy,
  Sad: ITEMS_IMAGES.mood_sad,
  Overthinking: ITEMS_IMAGES.mood_overthinking,
  Lazy: ITEMS_IMAGES.mood_lazy,
  Inspired: ITEMS_IMAGES.mood_inspired,
};
