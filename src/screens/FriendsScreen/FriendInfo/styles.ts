import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(6),
    gap: hp(6),
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
    borderWidth: 1,
    borderColor: 'green',
    padding: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    textAlign: 'left',
  },
  button: {
    width: '100%',
    borderRadius: wp(22),
    paddingVertical: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(16),
  },
});
