export type PersistContextType = {
  isContextLoading: boolean;
  //
};

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => void;
};
