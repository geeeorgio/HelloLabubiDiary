import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components';
import { ITEMS_IMAGES } from 'src/constants';

const EmptyListContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={ITEMS_IMAGES.facts_img}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <CustomContainer
        colorVariant="lightGreen"
        style={styles.contentContainer}
      >
        <CustomText style={styles.title}>
          No saved facts about Ace yet — start collecting his little truths.
        </CustomText>
      </CustomContainer>
    </View>
  );
};

export default EmptyListContainer;
