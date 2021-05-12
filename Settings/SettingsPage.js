import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import firebase from '../Firebase/config'

/**
 * The settings page
 */
class SettingsPage extends React.Component {
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  /**
   * Handles loggin out of firebase.auth()
   */
  onLogout(){
    firebase.auth().signOut()
  }

  render() {
    return (
      <View >
        <Text style={{marginTop: 25, fontSize: 20}}>Settings</Text>
        <SafeAreaView style={{margin: 15}}>
            <Button title="logout" onPress = {() => {this.onLogout()}}>LogOut</Button>
          </SafeAreaView>
      </View>
    );
  }
}

export default SettingsPage;