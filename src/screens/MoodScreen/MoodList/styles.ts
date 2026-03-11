import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    gap: hp(14),
  },
  columnWrapper: {
    gap: wp(8),
  },
});
