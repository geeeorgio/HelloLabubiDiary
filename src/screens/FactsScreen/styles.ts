import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(16),
  },
  header: {
    width: '100%',
    paddingLeft: wp(16),
    paddingVertical: hp(6),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(22),
  },
  headerText: {
    fontSize: sp(16),
  },
});
