import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, ScrollView, Button } from 'react-native';
import './WeekSection'
import WeekSection from './WeekSection';

class WeeklyPlanPage extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{ justifyContent: "space-between", alignItems: "center" , backgroundColor:'#AB9BFC'}}
      >
        <View style={{flexDirection: 'row', paddingTop: 25,
              paddingHorizontal: 10}}>
          <Text style={{fontSize: 42, paddingRight:20}}>Weeks Plan</Text>
          <Button onPress={this.publish} title="Publish" />
        </View>
        <WeekSection />
        <Button title="Add new section" onPress={this.addSection} color='#AB9BFC'/>
        
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