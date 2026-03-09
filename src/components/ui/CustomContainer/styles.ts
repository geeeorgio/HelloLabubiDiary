import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    borderRadius: wp(22),
  },
  lightGreen: {
    backgroundColor: COLORS.light_green_background,
  },
  darkGreen: {
    backgroundColor: COLORS.green_background,
  },
  mirror: {
    backgroundColor: COLORS.light_overlay,
  },
  lightPink: {
    backgroundColor: COLORS.pink,
  },
  darkPink: {
    backgroundColor: COLORS.fade_pink,
  },
  red: {
    backgroundColor: COLORS.quiz_red,
  },
  green: {
    backgroundColor: COLORS.quiz_green,
  },
  transparent: {
    backgroundColor: COLORS.liquid_overlay,
  },
  tabBar: {
    backgroundColor: COLORS.tab_bar_background,
  },
});
