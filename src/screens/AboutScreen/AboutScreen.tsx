import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import {
  ABOUT_SCREEN_INFO,
  CLOUD_FRAME,
  COLORS,
  ONBD_IMAGES,
  THOUGHTS,
} from 'src/constants';
import type { ThoughtsType } from 'src/types';
import { handleShare, hp, shuffleArray, wp } from 'src/utils';

const AboutScreen = () => {
  const [showThoughts, setShowThoughts] = useState(false);
  const [randomThought, setRandomThought] = useState<ThoughtsType | null>(null);

  const getRandomThought = useCallback(() => {
    const shuffledThoughts = shuffleArray(THOUGHTS);
    setRandomThought(shuffledThoughts[0]);
  }, []);

  const handleShowThoughts = useCallback(() => {
    getRandomThought();
    setShowThoughts(true);
  }, [getRandomThought]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setShowThoughts(false);
        setRandomThought(null);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <CustomContainer colorVariant="darkGreen" style={styles.mainContainer}>
        <CustomText style={styles.title}>{ABOUT_SCREEN_INFO.title}</CustomText>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionImgContainer}>
            <Image
              source={ONBD_IMAGES.onbd1}
              style={styles.descriptionImg}
              resizeMode="contain"
            />
          </View>
          <CustomText style={styles.description}>
            {ABOUT_SCREEN_INFO.description}
          </CustomText>
        </View>
      </CustomContainer>

      <CustomContainer
        colorVariant="transparent"
        style={styles.bottomContainer}
      >
        <CustomText style={styles.container_text}>
          {ABOUT_SCREEN_INFO.container_text}
        </CustomText>
        <View style={styles.thoughtsImgContainer}>
          <Image
            source={CLOUD_FRAME}
            style={styles.thoughtsImg}
            resizeMode="contain"
          />
          {randomThought && (
            <CustomText style={styles.randomThoughtText}>
              {`“${randomThought?.text}”`}
            </CustomText>
          )}
        </View>

        {showThoughts && (
          <View style={styles.thoughtsBtnContainer}>
            <CustomButton onPress={getRandomThought} style={styles.thoughtsBtn}>
              <CustomIcon
                name="refresh"
                width={wp(22)}
                height={hp(22)}
                color={COLORS.white}
              />
            </CustomButton>
            <CustomButton onPress={handleShare} style={styles.thoughtsBtn}>
              <CustomIcon
                name="share"
                width={wp(22)}
                height={hp(22)}
                color={COLORS.white}
              />
            </CustomButton>
          </View>
        )}

        {!showThoughts && (
          <CustomButton onPress={handleShowThoughts} style={styles.button}>
            <CustomText style={styles.buttonText}>
              {ABOUT_SCREEN_INFO.btnText}
            </CustomText>
          </CustomButton>
        )}
      </CustomContainer>
    </View>
  );
};

export default AboutScreen;
