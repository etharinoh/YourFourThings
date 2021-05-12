import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, ScrollView, Button } from 'react-native';
import './WeekSection'
import WeekSection from './WeekSection';

/**
 * NOT WORKING!!!!!!!
 * 
 * This page should handle the creation and use of the weeekly plans, these would be checklist breakdowns of tasks to complete in the form
 * 
 * Section Title - Section Complete
 *    - task name - task complete
 *    - task name - task complete
 *    - task name - task complete
 * ect
 * 
 * This does not work due to issues with state and struggling to create a test version to build from.
 */
class WeeklyPlanPage extends React.Component {
  /**
   * This shows how the state variable would be set up so that each input can be used whilst maintaining the state
   * @param {} props the props given when the page is called
   */
  constructor(props){
    super(props)

    this.state = {
      sections: [{
        index: 0,
        title: '',
        completed: false,
        tasks: [{
          id: 0,
          text: '',
          completed: false,
        }]
      }]
    }
    this.ref1 = React.createRef()

    this.publish = this.publish.bind(this)
  }
  /**
   * Similare to the other sections this method would link the current state of the app to the firebase database, so it could be accessed later
   */
  publish(){
    
  }
  /**
   * This is the on change method which would be passed to each section and their items so that they could update their values and these 
   * would be mirrored in the state
   * 
   * @param {*} index the index for the current section
   * @param {*} id the id of the item to change
   * @param {*} type the type of change it is, text or checkbox completed
   * @param {*} updates the value to change the state to
   */
  onChange(index, id, type, updates){

  }
  /**
   * Currently just shows a predefined number of sections.
   * @returns This returns a screen showing the basic design of the apage with proposed sections
   */
  render() {
    return (
      <SafeAreaView
        style={{ justifyContent: "space-between", alignItems: "center" , backgroundColor:'#AB9BFC'}}
      >
        <View style={{flexDirection: 'row', paddingTop: 25,
              paddingHorizontal: 10}}>
          <Text style={{fontSize: 42, paddingRight:20}}>Weeks Plan</Text>
          <Button onPress={this.publish} title="Publish" />
          <Button title="New section" onPress={this.addSection} color="purple"/>
        </View>
        <ScrollView >
        <WeekSection ref = {this.ref1} title="first" titleComplete={false} tasks={[{txt:  '123', complete: false},{txt:  'aaaaaa', complete: true},{txt:  '55555', complete: false},{txt:  '2222', complete: true}]}/>
        <WeekSection  title="section 2" titleComplete={true} tasks={[{txt:  'My first task for this', complete: true},{txt:  'completed this one!', complete: true},{txt:  'not yet :(', complete: false},{txt:  'Already ahead', complete: true}]}/>
        <WeekSection  title="todo 3" titleComplete={true} tasks={[{txt:  'My first task for this', complete: true},{txt:  'completed this one!', complete: true},{txt:  'not yet :(', complete: false},{txt:  'Already ahead', complete: true}]}/>

        
        </ScrollView>
      </SafeAreaView>
      
    );
  }
}

// TouchableHighlight for each weekly plan item this is where the modal to remove sections would be created
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