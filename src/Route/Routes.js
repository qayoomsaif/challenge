import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { navigationRef } from './RootNavigation';
import Splash from '../UI/Screens/Splash';
import Home from '../UI/Screens//Home/Home';
import Tabs from './Tabs/index'
const Routes = () => <NavigationContainer ref={navigationRef}>
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerStyle: { backgroundColor: '#633689' },
      headerTintColor: '#fff',
      headerShown: false,
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MainTab" component={Tabs} />
  </Stack.Navigator>
</NavigationContainer>

export { Routes }