import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";

import  firebase from '../Firebase/config'

class JournalEntryPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.route.params.newJournal);

    if (props.route.params.newJournal) {
      //populate from firebase
      this.state = {
         title: "", text: "" 
      };
    } else {
      this.state = {
        title: "", text: "" 
      };
    }
    this.publish = this.publish.bind(this)
  }

  publish(){
    //Convert the entry to a file, upload the file and then add an entry to the firestore collection journals
    console.log(this.state)
    firebase
    .firestore()
    .collection("journals")
    .doc(firebase.auth().currentUser.uid)
    .collection(this.state.title)
    .doc(this.state.title)
    .set({title: this.state.title, text: this.state.text })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  }
  render() {
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
