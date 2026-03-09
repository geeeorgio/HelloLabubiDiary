import { useCallback } from 'react';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { FactsFilterKeysType } from 'src/constants';

interface FilterBarListItemProps {
  item: FactsFilterKeysType;
  index: number;
  currentIndex: number;
  setCurrent: (index: number) => void;
  handleFilterPress: (item: FactsFilterKeysType) => void;
}

const FilterBarListItem = ({
  item,
  index,
  currentIndex,
  setCurrent,
  handleFilterPress,
}: FilterBarListItemProps) => {
  const handlePress = useCallback(() => {
    setCurrent(index);
    handleFilterPress(item);
  }, [setCurrent, handleFilterPress, item, index]);

  return (
    <CustomButton
      variant={currentIndex === index ? 'lightPink' : 'darkPink'}
      style={styles.button}
      onPress={handlePress}
    >
      <CustomText style={styles.text}>{item}</CustomText>
    </CustomButton>
  );
};

export default FilterBarListItem;
