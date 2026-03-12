import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: '25%',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(22),
    padding: wp(16),
  },
  title: {
    fontSize: sp(12),
    fontFamily: FONTS.Light,
    textAlign: 'center',
  },
});
