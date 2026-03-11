import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(12),
    gap: hp(16),
  },
  header: {
    width: '100%',
    padding: wp(16),
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
    borderRadius: wp(22),
    marginBottom: hp(10),
  },
  title: {
    fontSize: sp(16),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    color: COLORS.description_text,
  },
  backArrow: {
    width: wp(33),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
