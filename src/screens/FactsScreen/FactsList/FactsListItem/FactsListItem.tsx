import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { COLORS, ITEM_FRAME } from 'src/constants';
import type { FactType } from 'src/types';
import { hp, wp } from 'src/utils';

interface FactsListItemProps {
  item: FactType;
  handleSavePress: (item: FactType) => void;
}

const FactsListItem = ({ item, handleSavePress }: FactsListItemProps) => {
  return (
    <CustomContainer colorVariant="transparent" style={styles.item}>
      <View style={styles.contentContainer}>
        <CustomButton
          variant="default"
          style={styles.button}
          onPress={() => handleSavePress(item)}
        >
          <CustomIcon
            name="like"
            width={wp(24)}
            height={hp(24)}
            fill={item.isSaved ? COLORS.pink : 'transparent'}
          />
        </CustomButton>
        <View style={styles.textContainer}>
          <CustomText style={styles.text}>{item.text}</CustomText>
        </View>

        <View style={styles.thingContainer}>
          <Image
            source={ITEM_FRAME}
            style={styles.thingImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </CustomContainer>
  );
};

export default FactsListItem;
