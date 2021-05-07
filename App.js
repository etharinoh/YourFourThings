import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Settings,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import JournalMainPage from "./Journal/JournalMainPage";
import MainPage from "./Main/MainPage";
import LoginPage from "./Login/Login";
import JournalEntryPage from "./Journal/JournalEntryPage";
import SearchPage from "./Search/SearchPage";
import SettingsPage from "./Settings/SettingsPage";
import WeeklyPlanPage from "./Weekly/WeeklyPlanPage";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "today-outline"
            } else if (route.name === "Settings") {
              iconName = "settings-outline"
            } else if (route.name === "JournalMain") {
              iconName = "create-outline"
            } else if (route.name === "Search") {
              iconName = "search-outline"
            } else if (route.name === "Weekly") {
              iconName = "clipboard-outline"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "magenta",
          inactiveTintColor: "grey",
        }}
      >
        
        <Tab.Screen name="Login" component={LoginPage} />
        <Tab.Screen name="JournalMain" component={JournalMainPage} />
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
        <Tab.Screen name="Weekly" component={WeeklyPlanPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
  },
});
