import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import JournalHeader from './JournalHeader';
import firebase from  '../Firebase/config'
import {connect} from 'react'

var navigation;
class JournalMainPage extends React.Component {
  constructor(props){
    super(props)
    this.TitleList =  React.createRef()
    navigation = props.navigation
    this.state = {
      journalsFound: [],
    }
    
  }

  newJournal(){
    //navigate to new empty journal page
    navigation.navigate('Entry',{newJournal: true})
    //this.props.navigator.navigate('JournalEntryPage', {})
  }
  componentDidMount(){
    //Check all created and make a journal header with them
    firebase
    .firestore()
    .collection("journals")
    .doc(firebase.auth().currentUser.uid)
    .collection('userJournals')
    .get()
    .then((results) => {
      var Arr =[]
      results.forEach((doc) => {
        Arr.push(doc)                         
      })  
      this.setState({journalsFound: Arr}) 
    })
    .catch((error) => console.error(error))

    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      console.log("reach")
    })
    
  }
  render() {
    var Arr =[]
    this.state.journalsFound.forEach((doc) => {
      Arr.push(doc)                         
    })  
    return (
      <SafeAreaView >
      <View>
        <Text style={{fontSize: 42, marginTop: 15, textAlign: "center"}}>Journal Main Page</Text>


      </View>
      {/*This is where the journals wi9ll be */}
      
      <FlatList
      extraData= {this.state.journalsFound}
      data= {Arr}
      renderItem={({item}) => (
        <View>
        <JournalHeader title={item.data().title} text={item.data().text} navigation={navigation} /> 
        </View>
      )} >
      </FlatList>
      
      

      <Button title='Add new journal Entry' onPress={this.newJournal}/>
      </SafeAreaView>
    );
  }
}

// ...

export default JournalMainPage;