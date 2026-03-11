import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomIcon, CustomText } from 'src/components';
import type { QuizModeStateType } from 'src/types';
import { hp, wp } from 'src/utils';

interface QuizGameProps {
  quizState: QuizModeStateType;
  onModalOpen: () => void;
  onQuizComplete: () => void;
}

const QuizGame = ({
  quizState,
  onModalOpen,
  onQuizComplete,
}: QuizGameProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          variant="default"
          style={styles.backButton}
          onPress={onModalOpen}
        >
          <CustomIcon name="back" width={wp(24)} height={hp(24)} />
        </CustomButton>
        <CustomText style={styles.title}>
          {quizState.currentQuestionIdx + 1}/{quizState.totalQuestions}
        </CustomText>
      </View>
    </View>
  );
};

export default QuizGame;
