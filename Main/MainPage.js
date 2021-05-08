import React from 'react';
import { SafeAreaView, Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../Login/Login';
import JournalMainPage from '../Journal/JournalMainPage';
import SearchPage from '../Search/SearchPage';
import WeeklyPlanPage from '../Weekly/WeeklyPlanPage';

import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/action'

const Tab = createBottomTabNavigator();

class MainPage extends React.Component {
  componentDidMount(){
    this.props.fetchUser();
    console.log(this.state)
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>YourFourThings</Text>
      </SafeAreaView>
    );
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(null, mapDispatchProps)(MainPage);