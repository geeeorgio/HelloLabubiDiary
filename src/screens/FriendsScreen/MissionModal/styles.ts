import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark_overlay_3,
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: wp(30),
  },
  modalContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(24),
    paddingVertical: hp(16),
    borderWidth: wp(1),
    borderRadius: wp(22),
    borderColor: COLORS.onboarding_text,
    gap: hp(10),
  },
  modalTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.Light,
    textAlign: 'center',
  },
  modalButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.Light,
  },
  divider: {
    width: '100%',
    height: hp(1),
    backgroundColor: COLORS.pink,
    borderRadius: '100%',
  },
});
