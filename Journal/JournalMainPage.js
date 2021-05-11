import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import JournalHeader from './JournalHeader';
import firebase from  '../Firebase/config'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchJournals} from "../redux/action";

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
    
    this.props.fetchJournals();
    
  }
  render() {
    var Arr =[]
    const { journals } = this.props.journals;
    console.log(this.state)
    if(journals== null){
      return (
        <View><Text>Loading Journals</Text></View>
      )
    }   
      console.log(journals)  
      return (
      <SafeAreaView style={{paddingTop: '6%'}}>
      <Button title='Add new journal Entry' onPress={this.newJournal}/>
      
      <View>
        <Text style={{fontSize: 42, marginTop: 15, textAlign: "center"}}>Journal Main Page</Text>


      </View>
      {/*This is where the journals wi9ll be */}
      
      <FlatList
      extraData= {this.state.journalsFound}
      data= {journals}
      renderItem={({item}) => (
        <View>
        <JournalHeader title={item.title} text={item.text} navigation={navigation} /> 
        </View>
      )} >
      </FlatList>
            
      </SafeAreaView>
    );  
    
    
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  journals: store.userState
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, fetchJournals }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(JournalMainPage);

