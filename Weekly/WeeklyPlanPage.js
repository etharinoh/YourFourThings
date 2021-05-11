import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, ScrollView, Button } from 'react-native';

class WeeklyPlanPage extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{ justifyContent: "space-between", alignItems: "center" , backgroundColor:'#AB9BFC'}}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={{flexDirection: 'row', paddingTop: 25,
              paddingHorizontal: 10}}>
          <Text style={{fontSize: 42, paddingRight:20}}>Weeks Plan</Text>
          <Button onPress={this.publish} title="Publish" />
        </View>
        
        <Button title="Add new section" onPress={this.addSection} color='#AB9BFC'/>
        </ScrollView>
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