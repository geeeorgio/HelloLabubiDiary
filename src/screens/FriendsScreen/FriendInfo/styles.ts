import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: wp(6),
    gap: hp(2),
  },
  imgContainer: {
    width: '100%',
    height: '40%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
    paddingVertical: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
  },
  description: {
    fontSize: sp(11),
    fontFamily: FONTS.Light,
    textAlign: 'left',
  },
  button: {
    alignSelf: 'center',
    marginTop: hp(8),
    width: '90%',
    borderRadius: wp(22),
    paddingVertical: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(14),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
});
