import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Button, Alert } from 'react-native';
import firebase from '../Firebase/config'

var navigation
class SearchPage extends React.Component {
  constructor(props){
    super(props)
    navigation = props.navigation
    this.state = {
      searchFor: '',
      results: []
    }
    this.searchFor = this.searchFor.bind(this)
  }

  searchFor(toFind, type) {
    var result =[]
    var method ='';
    
    switch(type){
      case "Tg":
      method = "Tags"
      //Go through each date, check if any of the tags match the search

      break
      case "Th":
        method = "Things"
        //GO through each date, check if the text contents match, if they do add to return

      break
      case "W":
        method = "Weekly Plan"
        //if the section header matches the search return


      break
      case "J":
        method = "Journals"
        //if the journal title matches the search return

      break
      default:
        method = 'none';
    }
    console.log(method)
    if(result || method == 'none'){

    }
    else{
      Alert.alert("No Results",
       "No results where retiurned when searching for "+{toFind}+" within "+ method,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }])
    }
  }
  render() {
    return (
      <SafeAreaView >
        <View style={{flexDirection: 'row', paddingTop: 25,
              marginBottom: 10}}>
        <TextInput style={{flex: 1, borderWidth: 1, margin: 2, alignContent: 'center'}} placeholder="Search" onChangeText={(searchFor) => this.setState({ searchFor })}/>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 5}}>
          
        <Button  title="Search Tags" onPress={() => {this.searchFor(this.state.searchFor, "Tg")}} />
        
        <Button title="Search Things" onPress={() => this.searchFor(this.state.searchFor, "Th")} />
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 5, flex: 0}}>
        <Button title="Search Journals" onPress={() => this.searchFor(this.state.searchFor, "J")} />
        
        <Button title="Search Weekly Plan" onPress={() =>this.searchFor(this.state.searchFor, "W")} />
        </View>
        <FlatList style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        data={this.state.results}
        />
      </SafeAreaView>
    );
  }
}

// ...

export default SearchPage;