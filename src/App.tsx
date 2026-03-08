import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GameBackground } from './components';
import GameContextProvider from './context/GameContextProvider';
import RootNavigator from './navigation/RootNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <GameContextProvider>
        <NavigationContainer>
          <GameBackground>
            <RootNavigator />
          </GameBackground>
        </NavigationContainer>
      </GameContextProvider>
    </SafeAreaProvider>
  );
}
export default App;
