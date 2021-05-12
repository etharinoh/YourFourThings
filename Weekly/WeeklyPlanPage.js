import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, ScrollView, Button } from 'react-native';
import './WeekSection'
import WeekSection from './WeekSection';

class WeeklyPlanPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
    this.ref1 = React.createRef()

    this.publish = this.publish.bind(this)
  }
  publish(){
    console.log(this.ref1)
  }
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
        <WeekSection ref = {this.ref1} title="smile" titleComplete={false} tasks={[{txt:  '123', complete: false},{txt:  'aaaaaa', complete: true},{txt:  '55555', complete: false},{txt:  '2222', complete: true}]}/>
        <WeekSection  title="smile2" titleComplete={true} tasks={[{txt:  '123', complete: false},{txt:  'aaaaaa', complete: true},{txt:  '55555', complete: false},{txt:  '2222', complete: true}]}/>
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