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
    borderWidth: wp(2),
    borderColor: COLORS.white_border,
  },
  darkPink: {
    backgroundColor: COLORS.fade_pink,
    borderWidth: wp(2),
    borderColor: COLORS.white_border,
  },
  red: {
    backgroundColor: COLORS.quiz_red,
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
    borderRadius: wp(22),
  },
  green: {
    backgroundColor: COLORS.quiz_green,
    borderWidth: wp(1),
    borderColor: COLORS.quiz_green,
    borderRadius: wp(22),
  },
  deepPink: {
    backgroundColor: COLORS.deep_pink,
  },
  quizPink: {
    borderWidth: wp(1),
    backgroundColor: COLORS.quiz_pink,
    borderColor: COLORS.white_border,
    borderRadius: wp(22),
  },
});
