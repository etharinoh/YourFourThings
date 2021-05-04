import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView } from 'react-native';

class WeeklyPlanPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>WeeklyPlanPage</Text>
      </SafeAreaView>
    );
  }
}

// TouchableHighlight for each weekly plan item
function WeekItem(){
    var WeekTitle
    var WeekItem = new Map

    return (
    <TouchableHighlight>
        <Text>{WeekTitle}</Text>
    </TouchableHighlight>
    )
}


export default WeeklyPlanPage;