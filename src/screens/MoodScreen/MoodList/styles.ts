import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
  contentContainer: {
    gap: wp(16),
  },
  columnWrapper: {
    gap: hp(10),
  },
});
