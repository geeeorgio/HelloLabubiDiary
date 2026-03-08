import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
  OnboardingScreen4,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnbdStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnbdStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      <OnbdStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <OnbdStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <OnbdStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
      <OnbdStack.Screen
        name="OnboardingScreen4"
        component={OnboardingScreen4}
      />
    </OnbdStack.Navigator>
  );
};

export default OnboardingNavigator;
