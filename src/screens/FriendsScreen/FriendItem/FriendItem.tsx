import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import type { FriendType } from 'src/types';

interface FriendItemProps {
  item: FriendType;
  handleFriendPress: (friend: FriendType) => void;
}

const FriendItem = ({ item, handleFriendPress }: FriendItemProps) => {
  return (
    <View style={styles.item}>
      <CustomContainer colorVariant="transparent" style={styles.imgContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </CustomContainer>
      <View style={styles.infoContainer}>
        <CustomContainer
          colorVariant="lightGreen"
          style={styles.titleContainer}
        >
          <CustomText style={styles.title}>{item.title}</CustomText>
          <CustomText
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {item.description}
          </CustomText>
        </CustomContainer>

        <CustomButton
          variant="lightPink"
          style={styles.button}
          onPress={() => handleFriendPress(item)}
        >
          <CustomText style={styles.buttonText}>Read more</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default FriendItem;
