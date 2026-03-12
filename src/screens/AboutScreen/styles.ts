import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(24),
    paddingTop: hp(16),
    paddingBottom: hp(66),
    gap: hp(16),
  },
  mainContainer: {
    width: '100%',
    height: '40%',
    paddingTop: hp(12),
    paddingHorizontal: wp(14),
    borderRadius: wp(22),
    gap: hp(4),
  },
  title: {
    fontSize: sp(16),
  },
  descriptionContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: wp(2),
  },
  descriptionImgContainer: {
    flex: 0.45,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionImg: {
    width: '100%',
    height: '100%',
  },
  description: {
    flex: 0.55,
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    color: COLORS.description_text,
    textAlign: 'left',
  },
  bottomContainer: {
    width: '100%',
    height: '40%',
    paddingHorizontal: wp(16),
    paddingVertical: hp(10),
    borderRadius: wp(22),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
    position: 'relative',
    overflow: 'hidden',
  },
  container_text: {
    fontSize: sp(15),
    textAlign: 'center',
  },
  thoughtsImgContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  thoughtsImg: {
    width: '100%',
    height: '100%',
  },
  randomThoughtText: {
    width: '70%',
    position: 'absolute',
    top: '35%',
    fontSize: sp(12),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(22),
    paddingVertical: hp(6),
  },
  buttonText: {
    fontSize: sp(15),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  thoughtsBtnContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(8),
  },
  thoughtsBtn: {
    flex: 1,
    paddingVertical: hp(6),
    borderRadius: wp(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.white_border,
  },
});
