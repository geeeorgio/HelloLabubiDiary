import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(4),
    paddingHorizontal: wp(14),
    borderRadius: wp(22),
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    textAlign: 'center',
  },
});
