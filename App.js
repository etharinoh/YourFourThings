import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Settings } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalMainPage from './Journal/JournalMainPage';
import MainPage from './Main/MainPage';
import LoginPage from './Login/Login';
import JournalEntryPage from './Journal/JournalEntryPage';
import SearchPage from './Search/SearchPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={MainPage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
        <Stack.Screen
            name="JournalMain"
            component={JournalMainPage}
          />
          <Stack.Screen
            name="JournalEntry"
            component={JournalEntryPage}
          />
          <Stack.Screen
            name="Search"
            component={SearchPage}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
