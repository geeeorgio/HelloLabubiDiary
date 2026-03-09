import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    gap: hp(14),
  },
  footer: {
    height: hp(100),
  },
});
