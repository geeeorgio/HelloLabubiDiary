import { useCallback, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import type { MoodIdsTypes } from 'src/constants';
import { MOOD_IMAGES_MAP } from 'src/constants';
import type { MoodType } from 'src/types';
import { handleShare, hp, shuffleArray, wp } from 'src/utils';

interface MoodInfoProps {
  currentMood: MoodIdsTypes;
  moodList: MoodType[];
}

const MoodInfo = ({ moodList, currentMood }: MoodInfoProps) => {
  const [randomQuote, setRandomQuote] = useState<string>(
    moodList[0].description,
  );

  const handleSwitchQuote = useCallback(() => {
    const quote = shuffleArray(moodList)[0].description;

    setRandomQuote(quote);
  }, [moodList]);

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={MOOD_IMAGES_MAP[currentMood]}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <CustomContainer colorVariant="lightGreen" style={styles.infoContainer}>
        <CustomText style={styles.infoText}>{randomQuote}</CustomText>
      </CustomContainer>

      <View style={styles.buttonContainer}>
        <CustomButton style={styles.button} onPress={handleSwitchQuote}>
          <CustomIcon name="refresh" width={wp(24)} height={hp(24)} />
        </CustomButton>
        <CustomButton style={styles.button} onPress={handleShare}>
          <CustomIcon name="share" width={wp(24)} height={hp(24)} />
        </CustomButton>
      </View>
    </View>
  );
};

export default MoodInfo;
