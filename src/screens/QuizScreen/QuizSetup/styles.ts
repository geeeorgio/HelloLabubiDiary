import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: wp(16),
    gap: hp(8),
    paddingTop: hp(8),
    paddingBottom: hp(100),
  },
  topContainer: {
    borderWidth: wp(1),
    borderRadius: wp(22),
    paddingHorizontal: wp(20),
    paddingVertical: wp(8),
    gap: hp(8),
    borderColor: COLORS.description_text,
  },
  title: {
    fontSize: hp(17),
  },
  description: {
    fontSize: hp(14),
    fontFamily: FONTS.Light,
  },
  bottomContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
    gap: hp(8),
    paddingHorizontal: wp(24),
  },
  imgContainer: {
    width: '100%',
    height: hp(310),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(1),
    borderRadius: wp(22),
    paddingVertical: wp(6),
    paddingHorizontal: wp(12),
    borderColor: COLORS.white_border,
  },
  btnText: {
    fontSize: hp(16),
    textAlign: 'center',
  },
});
