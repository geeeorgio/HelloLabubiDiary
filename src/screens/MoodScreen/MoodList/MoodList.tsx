import { useCallback } from 'react';
import { FlatList } from 'react-native';

import MoodListItem from './MoodListItem/MoodListItem';
import { styles } from './styles';

import type { MoodIdsTypes } from 'src/constants';

interface MoodListProps {
  data: MoodIdsTypes[];
  handleChangeMood: (mood: MoodIdsTypes) => void;
}

const MoodList = ({ data, handleChangeMood }: MoodListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: MoodIdsTypes }) => {
      return <MoodListItem item={item} handleChangeMood={handleChangeMood} />;
    },
    [handleChangeMood],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.list}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default MoodList;
