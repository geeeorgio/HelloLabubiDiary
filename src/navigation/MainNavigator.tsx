import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AboutScreen,
  FactsScreen,
  FriendsScreen,
  MoodScreen,
  QuizScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createBottomTabNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName="AboutScreen"
    >
      <MainStack.Screen name="AboutScreen" component={AboutScreen} />
      <MainStack.Screen name="FactsScreen" component={FactsScreen} />
      <MainStack.Screen name="MoodScreen" component={MoodScreen} />
      <MainStack.Screen name="FriendsScreen" component={FriendsScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
