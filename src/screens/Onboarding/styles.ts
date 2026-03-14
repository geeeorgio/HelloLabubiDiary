import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp(111),
    justifyContent: 'flex-end',
    gap: hp(24),
    paddingHorizontal: wp(24),
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    paddingHorizontal: wp(20),
    paddingVertical: hp(16),
    borderRadius: wp(22),
    gap: hp(16),
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(16),
  },
  title: {
    fontSize: sp(18),
    textAlign: 'center',
  },
  description: {
    fontSize: sp(12),
    textAlign: 'center',
    fontFamily: FONTS.Light,
    color: COLORS.onboarding_text,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(22),
    paddingVertical: hp(4),
  },
  buttonText: {
    fontSize: sp(16),
    color: COLORS.white,
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  dotsContainer: {
    width: '25%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
  },
  dot: {
    width: wp(9),
    height: wp(8),
    borderRadius: wp(8),
    backgroundColor: COLORS.onbd_dot_inactive,
  },
  dotActive: {
    backgroundColor: COLORS.onbd_dot_active,
  },
});
