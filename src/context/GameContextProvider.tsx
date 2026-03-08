import { OnboardingContextProvider } from './OnboardingContextProvider';
import PersistContextProvider from './PersistContextProvider';

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnboardingContextProvider>
      <PersistContextProvider>{children}</PersistContextProvider>
    </OnboardingContextProvider>
  );
};

export default GameContextProvider;
