import { useCallback, useRef } from 'react';
import { FlatList } from 'react-native';

import FilterBarListItem from './FilterBarListItem/FilterBarListItem';
import { styles } from './styles';

import type { FactsFilterKeysType } from 'src/constants';
import { FactFilterKey } from 'src/constants';

interface FilterBarListProps {
  activeFilter: FactsFilterKeysType;
  handleFilterPress: (item: FactsFilterKeysType) => void;
}

const FilterBarList = ({
  activeFilter,
  handleFilterPress,
}: FilterBarListProps) => {
  const flatListRef = useRef<FlatList>(null);

  const currentIndex = FactFilterKey.indexOf(activeFilter);

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index >= FactFilterKey.length) return;

    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: FactsFilterKeysType; index: number }) => {
      return (
        <FilterBarListItem
          item={item}
          index={index}
          currentIndex={currentIndex}
          setCurrent={scrollToIndex}
          handleFilterPress={handleFilterPress}
        />
      );
    },
    [scrollToIndex, handleFilterPress, currentIndex],
  );

  return (
    <FlatList
      ref={flatListRef}
      data={FactFilterKey}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.list}
    />
  );
};

export default FilterBarList;
