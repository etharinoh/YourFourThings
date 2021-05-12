import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Button, Alert } from 'react-native';
import firebase from '../Firebase/config'
import SearchItem from './SearchItem';

var navigation
class SearchPage extends React.Component {
  constructor(props){
    super(props)
    navigation = props.navigation
    this.state = {
      method: '',
      results: [],
    }
    this.searchFor = this.searchFor.bind(this)
  }

  async searchFor(toFind, type) {
    var result =[]
    var method ='';
    switch(type){
      case "Tg":
      method = "Tags"
      //Go through each date, check if any of the tags match the search
      
      const tag = await firebase
      .firestore()
      .collection("things")
      .doc(firebase.auth().currentUser.uid)
      .collection('dates')
      .get()
      .then((results) => {
        
        results.forEach((doc) => {
          var found =  false;
          doc.data().tags.tagsArray.forEach(element => {
            if(element >= toFind){

              if(!found){
                result.push(doc.data())
              }
              found  = true;
            }
          });
        })})
        this.setState({results: result, method: method})
        console.log(this.state, result)
      break;
      case "Th":
        method = "Things"
       const thing = await firebase
      .firestore()
      .collection("things")
      .doc(firebase.auth().currentUser.uid)
      .collection('dates')
      .get()
      .then((results) => {
        
        results.forEach((doc) => {
          console.log(doc.data(), toFind)
          if((doc.data().thing1Text >= toFind) || (doc.data().thing2Text >= toFind) || (doc.data().thing3Text >= toFind) || (doc.data().thing4Text >= toFind)){
            result.push(doc.data())
          }
        })})
        this.setState({results: result, method: method})
        console.log(this.state, result)
      case "J":
        method = "Journals"
       const journ = await firebase
    .firestore()
    .collection("journals")
    .doc(firebase.auth().currentUser.uid)
    .collection('userJournals')
    .get()
    .then((results) => {
        results.forEach((doc) => {
          if(doc.data().title >= toFind){
            result.push(doc.data())  
          }
                                 
        }) 
        this.setState({results: result, method: method})
        console.log(this.state, result)
        } 
        
    )
      break
      default:
        method = 'none';
    } 
  }
  render() {
    return (
      <SafeAreaView >
        <View style={{flexDirection: 'row', paddingTop: 25,
              marginBottom: 10}}>
        <TextInput style={{flex: 1, borderWidth: 1, margin: 2, alignContent: 'center'}} placeholder="Search" onChangeText={(searchFor) => this.setState({ searchFor })}/>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 5, alignContent: 'center', alignSelf: 'center', padding: 10}}>
          
        <Button  title="Search Tags" onPress={() => {this.searchFor(this.state.searchFor, "Tg")}} />
        
        <Button title="Search Things" onPress={() => this.searchFor(this.state.searchFor, "Th")} />
        
        <Button title="Search Journals" onPress={() => this.searchFor(this.state.searchFor, "J")} />
        
        </View>
        <FlatList style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
      data= {this.state.results}
      renderItem={({item}) => (
        
        <SearchItem data={item} navigation={navigation} method={this.state.method}/> 
        
      )} >
      </FlatList>
      </SafeAreaView>
    );
  }
}

// ...

export default SearchPage;