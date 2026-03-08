import type { FactsCategoryType } from './gameplay';

export type PersistContextType = {
  isContextLoading: boolean;
  //
  contextSavedFacts: FactsCategoryType;
  toggleContextSavedFact: (value: string) => void;
};

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => void;
};
