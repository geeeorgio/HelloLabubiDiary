import { View } from 'react-native';

import { styles } from './styles';

interface QuizProgressBarProps {
  progress: number;
}

const QuizProgressBar = ({ progress }: QuizProgressBarProps) => {
  return (
    <View style={styles.progressBar}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${Math.max(0, Math.min(100, progress))}%` },
        ]}
      />
    </View>
  );
};

export default QuizProgressBar;
