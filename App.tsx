import { View, Text } from 'react-native'
import React from 'react'
import Splash from '@screens/splash/Splash'

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '@routes';
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </SafeAreaProvider>
  )
}