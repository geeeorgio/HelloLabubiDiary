import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { MOOD_IMAGES_MAP, type MoodIdsTypes } from 'src/constants';

interface MoodListItemProps {
  item: MoodIdsTypes;
  handleChangeMood: (mood: MoodIdsTypes) => void;
}

const MoodListItem = ({ item, handleChangeMood }: MoodListItemProps) => {
  return (
    <View style={styles.item}>
      <CustomContainer style={styles.imageContainer}>
        <Image
          source={MOOD_IMAGES_MAP[item]}
          style={styles.image}
          resizeMode="contain"
        />
      </CustomContainer>
      <CustomButton
        variant="lightGreen"
        style={styles.button}
        onPress={() => handleChangeMood(item)}
      >
        <CustomText style={styles.text}>{item}</CustomText>
      </CustomButton>
    </View>
  );
};

export default MoodListItem;
