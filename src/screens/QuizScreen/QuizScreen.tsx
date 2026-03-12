import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import MissionModal from '../FriendsScreen/MissionModal/MissionModal';

import QuizGame from './QuizGame/QuizGame';
import QuizResult from './QuizResult/QuizResult';
import QuizSetup from './QuizSetup/QuizSetup';
import { styles } from './styles';

import {
  QUIZ,
  TIME_PER_QUIZ_QUESTION,
  TOTAL_QUIZ_QUESTIONS,
} from 'src/constants';
import type { MainStackNavigationProp, QuizModeStateType } from 'src/types';
import type { QuizStatusType } from 'src/types';
import { shuffleArray } from 'src/utils';

const initialQuizState = (): QuizModeStateType => ({
  currentQuestionIdx: 0,
  correctAnswers: 0,
  totalQuestions: TOTAL_QUIZ_QUESTIONS,
  quizList: shuffleArray(QUIZ),
  time: TIME_PER_QUIZ_QUESTION,
});

const QuizScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const [quizState, setQuizState] =
    useState<QuizModeStateType>(initialQuizState());
  const [quizStatus, setQuizStatus] = useState<QuizStatusType>('setup');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleQuizStart = useCallback(() => {
    setQuizStatus('pending');
  }, []);

  const hadleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleQuizComplete = useCallback(() => {
    setQuizStatus('completed');
  }, []);

  const handleConfirmLeave = useCallback(() => {
    setIsModalVisible(false);

    setQuizStatus('setup');
    navigation.reset({
      index: 0,
      routes: [{ name: 'AboutScreen' }],
    });
  }, [navigation]);

  const handleStartAgain = useCallback(() => {
    setQuizStatus('setup');
    setQuizState(initialQuizState());
  }, []);

  return (
    <View style={styles.container}>
      {quizStatus === 'setup' && <QuizSetup onQuizStart={handleQuizStart} />}

      {quizStatus === 'pending' && (
        <QuizGame
          quizState={quizState}
          setQuizState={setQuizState}
          onModalOpen={hadleOpenModal}
          onQuizComplete={handleQuizComplete}
          isModalVisible={isModalVisible}
        />
      )}

      {quizStatus === 'completed' && (
        <QuizResult
          resultState={quizState}
          onExit={handleConfirmLeave}
          onStartAgain={handleStartAgain}
        />
      )}

      <MissionModal
        isVisible={isModalVisible}
        mission="Are you sure you want to leave the quiz? You will lose your progress"
        type="quiz"
        onClose={handleCloseModal}
        onConfirm={handleConfirmLeave}
      />
    </View>
  );
};

export default QuizScreen;
