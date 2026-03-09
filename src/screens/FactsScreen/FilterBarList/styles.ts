import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexGrow: 0,
    marginBottom: hp(10),
  },
  contentContainer: {
    gap: wp(6),
  },
});
