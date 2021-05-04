import React from 'react';
import { SafeAreaView, Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../Login/Login';
import JournalMainPage from '../Journal/JournalMainPage';
import SearchPage from '../Search/SearchPage';
import WeeklyPlanPage from '../Weekly/WeeklyPlanPage';

const Tab = createBottomTabNavigator();

class MainPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>YourFourThings</Text>
      </SafeAreaView>
    );
  }
}

// ...

export default MainPage;