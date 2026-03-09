import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import FactsListItem from './FactsListItem/FactsListItem';
import { styles } from './styles';

import type { FactType } from 'src/types';

interface FactsListProps {
  data: FactType[];
  handlePress: (item: FactType) => void;
}

const FactsList = ({ data, handlePress }: FactsListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: FactType }) => {
      return <FactsListItem item={item} handleSavePress={handlePress} />;
    },
    [handlePress],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.list}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default FactsList;
