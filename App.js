import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Settings,
  LogBox,
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

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import firebase from './Firebase/config'

import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Tab = createBottomTabNavigator();

const WeeklyStack = createStackNavigator()
const JournalStack = createStackNavigator()

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loaded: false,
      loggedIn: false
    }
    LogBox.ignoreLogs([
      'Setting a timer'
      ])
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }
      else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  render(){
    const {loggedIn, loaded} = this.state

    if (!loaded) {
      return (
        <SafeAreaView><Text>Loading</Text></SafeAreaView>
      )
    }
    if (!loggedIn) {
      return (
        <LoginPage />
      )
    }else{

    
    return (
    <Provider store = {store}>
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "today-outline"
            } else if (route.name === "Settings") {
              iconName = "settings-outline"
            } else if (route.name === "Journal") {
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
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Journal" component={JStack} />
        
        <Tab.Screen name="Home" component={MainPage} options={{unmountOnBlur: true}}/>
        
        <Tab.Screen name="Weekly" component={WeeklyPlanPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
  }}
}

function JStack(){
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen name='Main' component={JournalMainPage}/>
      <JournalStack.Screen name='Entry' component={JournalEntryPage}/>
    </JournalStack.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App
