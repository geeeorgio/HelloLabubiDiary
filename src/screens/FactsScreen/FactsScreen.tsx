import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';

import EmptyListContainer from './EmptyListContainer/EmptyListContainer';
import FactsList from './FactsList/FactsList';
import FilterBarList from './FilterBarList/FilterBarList';
import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components';
import type { FactCategoryKeys, FactsFilterKeysType } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type { FactType } from 'src/types';

const FactsScreen = () => {
  const { contextSavedFacts, toggleContextSavedFact } = usePersistContext();

  const [activeFilter, setActiveFilter] = useState<FactsFilterKeysType>('All');

  const filteredFacts = useMemo(() => {
    if (activeFilter === 'Saved') {
      return Object.values(contextSavedFacts).flatMap((list) =>
        list.facts.filter((fact) => fact.isSaved),
      );
    }

    if (activeFilter === 'All') {
      return Object.values(contextSavedFacts).flatMap((list) => list.facts);
    }

    return contextSavedFacts[activeFilter as FactCategoryKeys]?.facts || [];
  }, [activeFilter, contextSavedFacts]);

  const handleFilterPress = useCallback((item: FactsFilterKeysType) => {
    setActiveFilter(item);
  }, []);

  const handleSavePress = useCallback(
    (item: FactType) => {
      toggleContextSavedFact(item.id);
    },
    [toggleContextSavedFact],
  );

  return (
    <View style={styles.container}>
      <CustomContainer colorVariant="darkGreen" style={styles.header}>
        <CustomText style={styles.headerText}>Facts about Ace</CustomText>
      </CustomContainer>

      <View>
        <FilterBarList
          activeFilter={activeFilter}
          handleFilterPress={handleFilterPress}
        />
      </View>

      {filteredFacts.length > 0 ? (
        <FactsList data={filteredFacts} handlePress={handleSavePress} />
      ) : (
        <EmptyListContainer />
      )}
    </View>
  );
};

export default FactsScreen;
