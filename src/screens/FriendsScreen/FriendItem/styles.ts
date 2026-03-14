import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: hp(150),
    flexDirection: 'row',
    gap: wp(6),
    marginBottom: hp(8),
  },
  imgContainer: {
    flex: 0.35,
    height: '100%',
    borderRadius: wp(22),
    padding: wp(2),
    overflow: 'hidden',
    borderWidth: wp(1),
    borderColor: COLORS.onbd_dot_inactive,
    backgroundColor: COLORS.dark_overlay,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 0.65,
    height: '100%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '100%',
    paddingVertical: wp(6),
    paddingHorizontal: wp(16),
    borderRadius: wp(22),
    gap: hp(6),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: sp(15),
  },
  description: {
    fontSize: sp(11),
    fontFamily: FONTS.Light,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
    paddingVertical: hp(4),
    borderWidth: wp(2),
    borderColor: COLORS.white_border,
  },
  buttonText: {
    fontSize: sp(12),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
});
