import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import firebase from '../Firebase/config'

class SettingsPage extends React.Component {
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout(){
    firebase.auth().signOut()
  }

  render() {
    return (
      <View >
        <Text>Settings</Text>
        <SafeAreaView>
            <Button title="logout" onPress = {() => {this.onLogout()}}>LogOut</Button>
          </SafeAreaView>
      </View>
    );
  }
}

export default SettingsPage;