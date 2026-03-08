import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ONBD_IMAGES, ONBOARDING_INFO } from 'src/constants';
import { useOnboardingContext } from 'src/hooks/useOnboardingContext';

const OnboardingScreen4 = () => {
  const { setIsContextOnboardingDone } = useOnboardingContext();

  const handleNext = () => {
    setIsContextOnboardingDone(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={ONBD_IMAGES.onbd4}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <CustomContainer colorVariant="lightGreen" style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>
            {ONBOARDING_INFO.onboarding4.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARDING_INFO.onboarding4.description}
          </CustomText>
        </View>
        <CustomButton onPress={handleNext} style={styles.button}>
          <CustomText style={styles.buttonText}>
            {ONBOARDING_INFO.onboarding4.btnText}
          </CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.dotsContainer}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === ONBOARDING_INFO.onboarding4.dot_index &&
                styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardingScreen4;
