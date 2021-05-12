import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView, Modal, Alert } from 'react-native';
import firebase from '../Firebase/config'

/**
 * This is the component for the logging in page which handles loggining in and the creation of an account
 */
class LoginPage extends Component {
  modalVisible = false;
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      modalVisible: false,
      username: '',
      password: '',
      email: ''
    }
    this.modalVisible = this.state.modalVisible
    this.onCreateNew = this.onCreateNew.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
  }
/**
 * This will validate and then create a authentication pair of email and password, this is done through firebase
 * There is input handling performed by firebase.auth() for this and it will check that
 *  a) the password is 6 characters or longer
 *  b) the email is in valid format
 */
  onCreateNew() {
    const { username, password, email } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            username,
            email
          })
        this.setModalVisible(!this.state.modalVisible)
        Alert.alert("Success", "Your are now logged in", [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      })
      .catch((error) => {
        Alert.alert("Error", error.message, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]); console.log(error)
      })
  }
/**
 * The method for signing in by providing the system with an authenticated email and password combination
 * If successful a alert message will thell the user that they have signed in
 * If not an error alert will be returned containing the issue
 */
  onSignIn() {
    const { username, password, email } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        Alert.alert("Success", "You are now logged in", [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      })
      .catch((error) => {
        Alert.alert("Error", error.message, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]); console.log(error)
      })
  }
  /**
   * This is used to change whether the create account modal is visible or not
   * @param {*} visible 
   */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    
  }
  /**
   * Checks to see if a user has logged in from firebase and changes the corresponding state values
   */
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }
      else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  render() {

    return(

          <SafeAreaView style={styles.centeredView}>
            <Modal
            style={{backgroundColor:'#C7CBC9'}}
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(false);
              }}
            ><View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={{fontSize: 20}}>Create New Account</Text>
                  <TextInput placeholder="new username" onChangeText={(username) => this.setState({ username })} style={styles.textInput}></TextInput>
                  <TextInput placeholder="new email" onChangeText={(email) => this.setState({ email })} style={styles.textInput}></TextInput>
                  <TextInput placeholder="new password" onChangeText={(password) => this.setState({ password })} secureTextEntry style={styles.textInput}></TextInput>
                  <Button title="createNew" onPress={() => { this.onCreateNew() }}>"Create"</Button>
                </View>
              </View>
            </Modal>
            <View style={styles.centeredView}>
            <TextInput placeholder="username" onChangeText={(email) => this.setState({ email })} style={styles.textInput}></TextInput>
            <TextInput placeholder="password" onChangeText={(password) => this.setState({ password })} secureTextEntry style={styles.textInput}></TextInput>
            <View style={{margin: 15}}>
              <Button title="login" onPress={() => { this.onSignIn() }}>"Login"</Button>
            </View>
            
            <Button title="create" color='' onPress={() => { this.setModalVisible(true) }}>"Create Account"</Button>
            </View>
          </SafeAreaView>
      
    )
    
    }

  }

/**
 * Defines the styles that will be used by the components, so they do not have to be individually applied
 */
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    width: '80%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textInput: {
    width: "80%",
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    fontSize: 16
  }
})

export default LoginPage;