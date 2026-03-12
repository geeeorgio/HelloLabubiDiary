import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    height: hp(110),
    paddingLeft: wp(10),
    borderRadius: wp(22),
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(10),
    position: 'relative',
  },
  button: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(20),
  },
  textContainer: {
    flex: 0.85,
    paddingRight: '20%',
  },
  text: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
  },
  thingContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '45%',
    height: '100%',
    zIndex: -1,
  },
  thingImg: {
    width: '100%',
    height: '100%',
  },
});
