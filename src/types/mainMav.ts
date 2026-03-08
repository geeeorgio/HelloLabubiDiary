import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  AboutScreen: undefined;
  FactsScreen: undefined;
  MoodScreen: undefined;
  FriendsScreen: undefined;
  QuizScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
