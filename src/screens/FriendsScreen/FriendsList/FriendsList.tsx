import { ScrollView } from 'react-native';

import FriendItem from '../FriendItem/FriendItem';

import { styles } from './styles';

import type { FriendType } from 'src/types';

interface FriendsListProps {
  data: FriendType[];
  handleFriendPress: (friend: FriendType) => void;
}

const FriendsList = ({ data, handleFriendPress }: FriendsListProps) => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {data.map((item) => (
        <FriendItem
          key={item.title}
          item={item}
          handleFriendPress={handleFriendPress}
        />
      ))}
    </ScrollView>
  );
};

export default FriendsList;
