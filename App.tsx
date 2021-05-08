import React from 'react';
import { UserIdentification } from './src/pages/UserIdentification';
import AppLoading from 'expo-app-loading'
import { Text, View } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <UserIdentification />
  )
}