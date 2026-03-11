import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import type { FriendType } from 'src/types';

interface FriendInfoProps {
  friend: FriendType;
  onGetMission: () => void;
}

const FriendInfo = ({ friend, onGetMission }: FriendInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={friend.image} style={styles.img} resizeMode="contain" />
      </View>

      <CustomContainer
        colorVariant="lightGreen"
        style={styles.descriptionContainer}
      >
        <CustomText style={styles.description}>{friend.description}</CustomText>
      </CustomContainer>

      <CustomButton
        variant="lightPink"
        style={styles.button}
        onPress={onGetMission}
      >
        <CustomText
          style={styles.buttonText}
        >{`${friend.btnText} ${friend.title}`}</CustomText>
      </CustomButton>
    </View>
  );
};

export default FriendInfo;
