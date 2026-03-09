import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';

import MoodList from './MoodList/MoodList';
import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components';
import type { MoodIdsTypes } from 'src/constants';
import { MOOD_IDS_LIST, MOOD_MAP, MOOD_SCREEN_INFO } from 'src/constants';

const MoodScreen = () => {
  const [currentMood, setCurrentMood] = useState<MoodIdsTypes | null>(null);

  const moodList = useMemo(() => {
    if (!currentMood) return null;

    return MOOD_MAP[currentMood];
  }, [currentMood]);

  const handleMoodPress = useCallback(
    (mood: MoodIdsTypes) => {
      if (!mood || mood === currentMood) return;

      setCurrentMood(mood);
    },
    [currentMood],
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentMood(null);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <CustomContainer colorVariant="darkGreen" style={styles.header}>
        <CustomText style={styles.title}>{MOOD_SCREEN_INFO.title}</CustomText>
        <CustomText style={styles.description}>
          {MOOD_SCREEN_INFO.description}
        </CustomText>
      </CustomContainer>

      <MoodList data={[...MOOD_IDS_LIST]} handleChangeMood={handleMoodPress} />
    </View>
  );
};

export default MoodScreen;
