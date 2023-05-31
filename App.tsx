/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './src/features/login';
import Buttons from './src/features/buttons';
import { Provider } from 'react-redux';
import { store } from './src/store';
import SimulatorCheck from './src/features/buttons/SimulatorScreen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="Buttons"
          component={Buttons}
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="SimulatorCheck"
          component={SimulatorCheck}
          options={{headerShown: false}}
      />
  </Stack.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
    </NavigationContainer>
  );
}

export default App;
