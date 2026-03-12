import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(10),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: hp(16),
    textAlign: 'center',
  },
  questionContainer: {
    width: '100%',
    height: hp(110),
    padding: wp(20),
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
    borderRadius: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: hp(15),
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginTop: hp(16),
    borderRadius: wp(22),
    gap: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(4),
    height: hp(55),
    padding: wp(6),
    alignItems: 'center',
  },
  optionImgWrapper: {
    flex: 0.3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionImg: {
    width: '100%',
    height: '100%',
  },
  optionText: {
    flex: 0.7,
    fontSize: sp(12),
    fontFamily: FONTS.Light,
  },
});
