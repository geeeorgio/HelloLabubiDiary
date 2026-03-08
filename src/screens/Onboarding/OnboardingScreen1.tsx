import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ONBD_IMAGES, ONBOARDING_INFO } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={ONBD_IMAGES.onbd1}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <CustomContainer colorVariant="lightGreen" style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>
            {ONBOARDING_INFO.onboarding1.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARDING_INFO.onboarding1.description}
          </CustomText>
        </View>
        <CustomButton onPress={handleNext} style={styles.button}>
          <CustomText style={styles.buttonText}>
            {ONBOARDING_INFO.onboarding1.btnText}
          </CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.dotsContainer}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === ONBOARDING_INFO.onboarding1.dot_index &&
                styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardingScreen1;
