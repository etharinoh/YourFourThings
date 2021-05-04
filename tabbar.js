import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

class TabBar extends React.Component {
  render( {navigation }) {
    return (
        <SafeAreaView >
        <Button title="Search" onPress={ () => this.props.navigation.navigate('Search')} />
        <Button title="Journal" onPress={() => this.props.navigation.navigate('JournalMain')}/>
        <Button title="Your Four Things" onPress={() =>this.props.navigation.navigate('Home')}/>
        <Button title="Weekly To-Do" onPress={() =>this.props.navigation.navigate('Weekly')}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    tButton: {
      flex: 0.25,
      backgroundColor: '#6200EE',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default TabBar;