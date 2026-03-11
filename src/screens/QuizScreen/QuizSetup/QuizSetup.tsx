import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ITEMS_IMAGES, QUIZ_SCREEN_INFO } from 'src/constants';

interface QuizSetupProps {
  onQuizStart: () => void;
}

const QuizSetup = ({ onQuizStart }: QuizSetupProps) => {
  return (
    <View style={styles.container}>
      <CustomContainer colorVariant="darkGreen" style={styles.topContainer}>
        <CustomText style={styles.title}>{QUIZ_SCREEN_INFO.title}</CustomText>
        <CustomText style={styles.description}>
          {QUIZ_SCREEN_INFO.description}
        </CustomText>
        <CustomText style={styles.description}>
          {QUIZ_SCREEN_INFO.more_info}
        </CustomText>
      </CustomContainer>

      <View style={styles.bottomContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={ITEMS_IMAGES.quiz_start}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <CustomButton style={styles.btn} onPress={onQuizStart}>
          <CustomText style={styles.btnText}>
            {QUIZ_SCREEN_INFO.btnText}
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default QuizSetup;
