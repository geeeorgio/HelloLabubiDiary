import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { FactCategoryKeys } from 'src/constants';
import {
  FEELINGS_EMOTIONS_FACTS,
  HABITS_AND_LITTLE_THINGS_FACTS,
  HER_LITTLE_WORLD_FACTS,
  PERSONALITY_FACTS,
} from 'src/constants';
import type { FactsCategoryType, PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

const PersistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [likedFactsIds, setLikedFactsIds] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      const storedFactsIds = await getItemFromStorage<string[]>('liked_facts');

      if (storedFactsIds !== null) {
        setLikedFactsIds(storedFactsIds);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setItemInStorage('liked_facts', likedFactsIds);
    }
  }, [likedFactsIds, isLoading]);

  const toggleContextSavedFact = useCallback((value: string) => {
    setLikedFactsIds((prev) =>
      prev.includes(value)
        ? prev.filter((id) => id !== value)
        : [...prev, value],
    );
  }, []);

  const persistFacts = useMemo(() => {
    const initialFacts: FactsCategoryType = {
      Personality: { ...PERSONALITY_FACTS },
      'Habits & Little Things': { ...HABITS_AND_LITTLE_THINGS_FACTS },
      'Feelings & Emotions': { ...FEELINGS_EMOTIONS_FACTS },
      'Her Little World': { ...HER_LITTLE_WORLD_FACTS },
    };

    const newFacts = { ...initialFacts };

    (Object.keys(newFacts) as FactCategoryKeys[]).forEach((category) => {
      newFacts[category].facts = newFacts[category].facts.map((fact) => ({
        ...fact,
        isSaved: likedFactsIds.includes(fact.id),
      }));
    });

    return newFacts;
  }, [likedFactsIds]);

  const value = useMemo(
    () => ({
      isContextLoading: isLoading,
      contextSavedFacts: persistFacts,
      toggleContextSavedFact,
    }),
    [isLoading, persistFacts, toggleContextSavedFact],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};

export default PersistContextProvider;
