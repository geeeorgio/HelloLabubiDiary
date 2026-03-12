import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(12),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: wp(40),
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: hp(20),
    textAlign: 'center',
  },
  statsContainer: {
    width: '100%',
    padding: wp(20),
    gap: hp(20),
    borderRadius: wp(22),
    borderWidth: wp(2),
    borderColor: COLORS.white_border,
  },
  correctIncorrectContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(33),
  },
  answersContainer: {
    flex: 0.5,
    alignItems: 'center',
    gap: wp(6),
  },
  answersTextContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scoreText: {
    fontSize: hp(12),
    fontFamily: FONTS.Light,
  },
  scoreValueContainer: {
    width: '100%',
    height: hp(18),
    borderRadius: wp(22),
    borderWidth: wp(1),
    borderColor: COLORS.white,
  },
  scoreValueFill: {
    height: '100%',
    borderRadius: wp(22),
  },
  correctValueFill: {
    backgroundColor: COLORS.correct_answer,
  },
  incorrectValueFill: {
    backgroundColor: COLORS.incorrect_answer,
  },
  finalScoreValueFill: {
    backgroundColor: COLORS.pink,
  },
  finalScoreContainer: {
    width: '100%',
    gap: hp(10),
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
    paddingVertical: wp(6),
    borderWidth: wp(2),
    borderColor: COLORS.pink_border,
  },
  buttonText: {
    fontSize: hp(16),
    textAlign: 'center',
    fontFamily: FONTS.SemiBold,
  },
  imgContainer: {
    alignSelf: 'center',
    width: '90%',
    height: hp(250),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
