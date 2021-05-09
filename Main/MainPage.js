import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../Login/Login';
import JournalMainPage from '../Journal/JournalMainPage';
import SearchPage from '../Search/SearchPage';
import WeeklyPlanPage from '../Weekly/WeeklyPlanPage';

import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/action'
import './Thing'
import Thing from './Thing';
import firebase from '../Firebase/config'

import DateTimePicker from '@react-native-community/datetimepicker';


class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      date: new Date(),
      show: false
    }
    this.thingOne = React.createRef();
    this.thingTwo = React.createRef();
    this.thingThree = React.createRef();
    this.thingFour = React.createRef();
  }

  componentDidMount(){
    try {
      this.props.fetchUser();
    } catch (error) {
      console.log(error)
    }
    
  }
  setDate = (event, date) => {
    this.setState({date: date, show: false})
    console.log(this.state.date)
  };

  publish = () => {
    var thing1 = this.thingOne.current.state
    var thing2 = this.thingTwo.current.state
    var thing3 = this.thingThree.current.state
    var thing4 = this.thingFour.current.state
    /*firebase.firestore().collection('things')
          .doc(firebase.auth().currentUser.uid)
          .set({
            date,
            thing1Text,
            thing1Bool,
            thing2Text,
            thing2Bool,
            thing3Text,
            thing3Bool,
            thing4Text,
            thing4Bool,
            tags,
            reflection
          }) */

  }
  showDatepicker = () => {
    this.setState(() => this.state.show = true)
    console.log(this.state.date)
  };
  
  render() {
    const {currentUser} = this.props;
    if(currentUser == null){
      return(
        <View>
          <Text>Please Login</Text>
        </View>
      )
    }
    return (
      <SafeAreaView style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{flexDirection: "row", paddingTop: 25, paddingHorizontal: 10}}>
        <Text style={{fontSize: 20, flex: 1}}>YourFourThings</Text>
        <Button title="Publish" onPress={this.publish} color='purple'/>
      <Button title= "Choose Date"onPress={this.showDatepicker} ></Button>
      { this.state.show && (<DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode='date'
          is24Hour={true}
          display="default"
          onChange= {this.setDate}
        />)}
      </View>
      
        
        <Text style={{padding: 10}}>Hi {currentUser.username}, your four things for today are:</Text>
        <View> 
        <Thing ref={this.thingOne} number="1" text ="My Fist Thing" completed={false} />
        <Thing ref={this.thingTwo} number="2" text ="My Second Thing" completed={true} />
        <Thing ref={this.thingThree} number="3" text ="My Second Thing" completed={false} />
        <Thing ref={this.thingFour} number="4" text ="My Second Thing" completed={true} />
        </View>
        
        <View style={{backgroundColor: 'grey', width: 400, opacity: 0.75}}> 
        <Text style={{fontWeight: 'bold'}}>Tags:</Text>
          <TextInput ></TextInput>
          <Button title="newTag" />
        </View>
        <View style={{backgroundColor: 'grey', width: 400, opacity: 0.75}}> 
        <Text style={{fontWeight: 'bold'}}>Reflection: </Text>
        <TextInput placeholder="Type your reflection for today here" />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(MainPage);