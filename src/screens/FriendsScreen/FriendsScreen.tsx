import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import FriendInfo from './FriendInfo/FriendInfo';
import FriendsList from './FriendsList/FriendsList';
import MissionModal from './MissionModal/MissionModal';
import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { FRIENDS_LIST, FRIENDS_SCREEN_INFO, MISSIONS } from 'src/constants';
import type { FriendType } from 'src/types';
import { hp, shuffleArray, wp } from 'src/utils';

const FriendsScreen = () => {
  const [currentFriend, setCurrentFriend] = useState<FriendType | null>(null);
  const [mission, setMission] = useState<string | null>(null);

  const handleFriendPress = useCallback((friend: FriendType) => {
    setCurrentFriend(friend);
  }, []);

  const handleFriendReset = useCallback(() => {
    setCurrentFriend(null);
  }, []);

  const handleGetMission = useCallback(() => {
    const m = shuffleArray(MISSIONS)[0];

    setMission(m);
  }, []);

  const hadleFinishMisson = useCallback(() => {
    setMission(null);
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setCurrentFriend(null);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      {currentFriend ? (
        <>
          <CustomButton
            variant="default"
            style={styles.backArrow}
            onPress={handleFriendReset}
          >
            <CustomIcon name="back" width={wp(24)} height={hp(24)} />
          </CustomButton>

          <FriendInfo friend={currentFriend} onGetMission={handleGetMission} />
        </>
      ) : (
        <>
          <CustomContainer colorVariant="darkGreen" style={styles.header}>
            <CustomText style={styles.title}>
              {FRIENDS_SCREEN_INFO.title}
            </CustomText>
            <CustomText style={styles.description}>
              {FRIENDS_SCREEN_INFO.description}
            </CustomText>
          </CustomContainer>

          <FriendsList
            data={[...FRIENDS_LIST]}
            handleFriendPress={handleFriendPress}
          />
        </>
      )}

      {mission && (
        <MissionModal
          isVisible={Boolean(mission)}
          onClose={hadleFinishMisson}
          onConfirm={hadleFinishMisson}
          mission={mission}
        />
      )}
    </View>
  );
};

export default FriendsScreen;
