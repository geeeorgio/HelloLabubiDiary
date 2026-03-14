import { useCallback, useEffect, useRef, useState } from 'react';
import { Image, View } from 'react-native';

import QuizProgressBar from '../QuizProgressBar/QuizProgressBar';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { CLOUD_FRAME } from 'src/constants';
import type { QuizModeStateType } from 'src/types';
import { hp, wp } from 'src/utils';

interface QuizGameProps {
  quizState: QuizModeStateType;
  setQuizState: React.Dispatch<React.SetStateAction<QuizModeStateType>>;
  onModalOpen: () => void;
  onQuizComplete: () => void;
  isModalVisible: boolean;
}

const QuizGame = ({
  quizState,
  setQuizState,
  onModalOpen,
  onQuizComplete,
  isModalVisible,
}: QuizGameProps) => {
  const [timeLeft, setTimeLeft] = useState(quizState.time);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quizState.quizList[quizState.currentQuestionIdx];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextStepTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const quizStateRef = useRef(quizState);
  quizStateRef.current = quizState;

  const moveToNextQuestion = useCallback(() => {
    const { currentQuestionIdx, totalQuestions, time } = quizStateRef.current;

    if (currentQuestionIdx + 1 >= totalQuestions) {
      onQuizComplete();
      return;
    }

    setQuizState((prev) => ({
      ...prev,
      currentQuestionIdx: prev.currentQuestionIdx + 1,
    }));
    setTimeLeft(time);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [onQuizComplete, setQuizState]);

  const handleAnswer = useCallback(
    (option: string | null) => {
      if (isAnswered) return;

      setIsAnswered(true);
      setSelectedOption(option);

      if (timerRef.current) clearInterval(timerRef.current);

      const isCorrect = option === currentQuestion.correctValue;
      if (isCorrect) {
        setQuizState((prev) => ({
          ...prev,
          correctAnswers: prev.correctAnswers + 1,
        }));
      }

      nextStepTimeoutRef.current = setTimeout(() => {
        moveToNextQuestion();
      }, 1111);
    },
    [
      isAnswered,
      currentQuestion.correctValue,
      setQuizState,
      moveToNextQuestion,
    ],
  );

  useEffect(() => {
    if (isAnswered || isModalVisible) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 100) return 0;
        return prev - 100;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAnswered, isModalVisible, quizState.currentQuestionIdx]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (nextStepTimeoutRef.current) clearTimeout(nextStepTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !isAnswered) {
      handleAnswer(null);
    }
  }, [timeLeft, isAnswered, handleAnswer]);

  const getOptionVariant = (option: string) => {
    if (!isAnswered) return 'quizPink';

    if (option === currentQuestion.correctValue) return 'green';

    if (option === selectedOption && option !== currentQuestion.correctValue)
      return 'red';

    return 'quizPink';
  };

  const progressPercent = (timeLeft / quizState.time) * 100;

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

      <CustomContainer
        colorVariant="lightGreen"
        style={styles.questionContainer}
      >
        <CustomText style={styles.questionText}>
          {quizState.quizList[quizState.currentQuestionIdx].question}
        </CustomText>
      </CustomContainer>

      <QuizProgressBar progress={progressPercent} />

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <CustomButton
            variant={getOptionVariant(option)}
            key={option}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
            disabled={isAnswered}
          >
            <View style={styles.optionImgWrapper}>
              <Image
                source={CLOUD_FRAME}
                style={styles.optionImg}
                resizeMode="contain"
              />
            </View>
            <CustomText style={styles.optionText}>{option}</CustomText>
          </CustomButton>
        ))}
      </View>
    </View>
  );
};

export default QuizGame;
