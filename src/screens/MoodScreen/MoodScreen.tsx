import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';

import MoodInfo from './MoodInfo/MoodInfo';
import MoodList from './MoodList/MoodList';
import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import type { MoodIdsTypes } from 'src/constants';
import { MOOD_IDS_LIST, MOOD_MAP, MOOD_SCREEN_INFO } from 'src/constants';
import { hp, wp } from 'src/utils';

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

  const handleMoodReset = useCallback(() => {
    setCurrentMood(null);
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentMood(null);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      {currentMood && moodList?.length ? (
        <>
          <CustomButton
            variant="default"
            style={styles.backArrow}
            onPress={handleMoodReset}
          >
            <CustomIcon name="back" width={wp(24)} height={hp(24)} />
          </CustomButton>
          <MoodInfo moodList={moodList} currentMood={currentMood} />
        </>
      ) : (
        <>
          <CustomContainer colorVariant="darkGreen" style={styles.header}>
            <CustomText style={styles.title}>
              {MOOD_SCREEN_INFO.title}
            </CustomText>
            <CustomText style={styles.description}>
              {MOOD_SCREEN_INFO.description}
            </CustomText>
          </CustomContainer>
          <MoodList
            data={[...MOOD_IDS_LIST]}
            handleChangeMood={handleMoodPress}
          />
        </>
      )}
    </View>
  );
};

export default MoodScreen;
