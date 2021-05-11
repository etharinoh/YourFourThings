import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import JournalHeader from './JournalHeader';
import firebase from  '../Firebase/config'

var navigation;
class JournalMainPage extends React.Component {
  constructor(props){
    super(props)
    this.TitleList =  React.createRef()
    navigation = props.navigation
    
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
    .get()
    .then((results) => {
      console.log(results)
      
    })
    .catch((error) => console.error(error))
  }
  render() {
    return (
      <SafeAreaView >
      <View>
        <Text style={{fontSize: 42, marginTop: 15, textAlign: "center"}}>Journal Main Page</Text>


      </View>
      {/*This is where the journals wi9ll be */}
      <ScrollView ref={this.TitleList}>

      </ScrollView>
      <JournalHeader journalTitle='first'/>

      <Button title='Add new journal Entry' onPress={this.newJournal}/>
      </SafeAreaView>
    );
  }
}

// ...

export default JournalMainPage;