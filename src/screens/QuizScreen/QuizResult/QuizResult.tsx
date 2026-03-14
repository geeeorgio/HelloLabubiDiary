import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { ITEMS_IMAGES } from 'src/constants';
import type { QuizModeStateType } from 'src/types';
import { hp, wp } from 'src/utils';

interface QuizResultProps {
  resultState: QuizModeStateType;
  onExit: () => void;
  onStartAgain: () => void;
}

const QuizResult = ({ resultState, onExit, onStartAgain }: QuizResultProps) => {
  const correctAnswersPercentage = Math.round(
    (resultState.correctAnswers / resultState.totalQuestions) * 100,
  );

  const incorrectAnswersPercentage = 100 - correctAnswersPercentage;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          variant="default"
          style={styles.backButton}
          onPress={onExit}
        >
          <CustomIcon name="back" width={wp(24)} height={hp(24)} />
        </CustomButton>
        <CustomText style={styles.title}>Results</CustomText>
      </View>

      <CustomContainer colorVariant="lightGreen" style={styles.statsContainer}>
        <View style={styles.correctIncorrectContainer}>
          <View style={styles.answersContainer}>
            <View style={styles.answersTextContainer}>
              <CustomText style={styles.scoreText}>Correct</CustomText>
              <CustomText style={styles.scoreText}>
                {correctAnswersPercentage}%
              </CustomText>
            </View>

            <View style={styles.scoreValueContainer}>
              <View
                style={[
                  styles.scoreValueFill,
                  { width: `${correctAnswersPercentage}%` },
                  styles.correctValueFill,
                ]}
              />
            </View>
          </View>

          <View style={styles.answersContainer}>
            <View style={styles.answersTextContainer}>
              <CustomText style={styles.scoreText}>Incorrect</CustomText>
              <CustomText style={styles.scoreText}>
                {incorrectAnswersPercentage}%
              </CustomText>
            </View>

            <View style={styles.scoreValueContainer}>
              <View
                style={[
                  styles.scoreValueFill,
                  { width: `${incorrectAnswersPercentage}%` },
                  styles.incorrectValueFill,
                ]}
              />
            </View>
          </View>
        </View>

        <View style={styles.finalScoreContainer}>
          <View style={styles.answersTextContainer}>
            <CustomText style={styles.scoreText}>You know Ace for</CustomText>
            <CustomText style={styles.scoreText}>
              {correctAnswersPercentage}%
            </CustomText>
          </View>

          <View style={styles.scoreValueContainer}>
            <View
              style={[
                styles.scoreValueFill,
                { width: `${correctAnswersPercentage}%` },
                styles.finalScoreValueFill,
              ]}
            />
          </View>
        </View>
      </CustomContainer>

      <CustomButton style={styles.button} onPress={onStartAgain}>
        <CustomText style={styles.buttonText}>Start again</CustomText>
      </CustomButton>

      <View style={styles.imgContainer}>
        <Image
          source={ITEMS_IMAGES.mood_happy}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default QuizResult;
