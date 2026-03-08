import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, MAIN_BACKGROUND } from 'src/constants';

const GameBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.dark_overlay_2,
  },
});
