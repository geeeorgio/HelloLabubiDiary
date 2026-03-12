import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(10),
  },
  imgWrapper: {
    width: '100%',
    height: '45%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(10),
    paddingHorizontal: wp(20),
    borderRadius: wp(22),
  },
  infoText: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(10),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(22),
    paddingVertical: hp(6),
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
  },
});
