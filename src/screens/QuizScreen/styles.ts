import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(16),
    backgroundColor: COLORS.dark_overlay,
  },
});
