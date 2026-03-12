import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: hp(16),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(22),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.pink,
  },
});
