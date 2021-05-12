import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";

import  firebase from '../Firebase/config'

class JournalEntryPage extends React.Component {
  constructor(props) {
    super(props);

    if (props.route.params.newJournal) {
      //populate from firebase
      this.state = {
         title: "", text: "", exists: false
      };
    } else {
      this.state = {
        title: props.route.params.title, text: props.route.params.text, exists: true
      };
    }
    this.publish = this.publish.bind(this)
  }

  /**
   * This will ensure that the title and text have both been filled in and if so then this will be published to the firebase storage
   */
  publish(){
    if((this.state.title == '') || (this.state.text =='')){
      return (
        Alert.alert('Error', 'Please ensure that the title and text are not empty',[
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      )
    }
    firebase
    .firestore()
    .collection("journals")
    .doc(firebase.auth().currentUser.uid)
    .collection('userJournals')
    .doc(this.state.title)
    .set({title: this.state.title, text: this.state.text })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  }
  /**
   * This will check to see if the state exists property is true, if this is true then the page will be loaded with the infomration passed from the previous page
   * Otherwise it will create a blank page to fill in
   * @returns 
   */
  render() {
    if(this.state.exists){
      return(
      <SafeAreaView>
        <ScrollView>
          <TextInput
            placeholder="Title"
            onChangeText={(title) => {
              this.setState({title: title });
            }}
            value={this.state.title}
            style={{ fontSize: 35, textAlign: 'center' }}
          />
          <View  style={{marginHorizontal: 10, borderRadius: 15, marginVertical: 5}}>
            <Button title="Publish" onPress={this.publish} color="purple" />
          </View>
          <View style={{borderWidth: 2, margin: 5}}>
            <TextInput
            style={{ flex: 1 , textAlign: 'left', fontSize: 18}}
            multiline
            onChangeText={(text) => {
              this.setState({text: text });
            }}
            placeholder="Write your journal entry here"
            value={this.state.text}
          />
          </View>
          
        </ScrollView>
      </SafeAreaView>)
    }
    else{

    }
    return (
      <SafeAreaView>
        <ScrollView>
          <TextInput
            placeholder="Title"
            onChangeText={(title) => {
              this.setState({title: title });
            }}
            style={{ fontSize: 35, textAlign: 'center' }}
          />
          <View  style={{marginHorizontal: 10, borderRadius: 15, marginVertical: 5}}>
            <Button title="Publish" onPress={this.publish} color="purple" />
          </View>
          <View style={{borderWidth: 2, margin: 5}}>
            <TextInput
            style={{ flex: 1 , textAlign: 'left', fontSize: 18}}
            multiline
            onChangeText={(text) => {
              this.setState({text: text });
            }}
            placeholder="Write your journal entry here"
          />
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// ...

export default JournalEntryPage;
