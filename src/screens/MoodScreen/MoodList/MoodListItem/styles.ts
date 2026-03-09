import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: hp(150),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    borderRadius: wp(22),
    padding: wp(2),
    overflow: 'hidden',
    borderWidth: wp(1),
    borderColor: COLORS.green_border,
    backgroundColor: COLORS.light_overlay,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sp(12),
    textAlign: 'center',
  },
});
