import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView, Modal, Alert } from 'react-native';
import firebase from '../Firebase/config'


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
        console.log(username, password, email, firebase.auth().currentUser.uid)
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

  onSignIn() {
    const { username, password, email } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
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
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    
  }
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
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(false);
              }}
            ><View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput placeholder="new username" onChangeText={(username) => this.setState({ username })}></TextInput>
                  <TextInput placeholder="new email" onChangeText={(email) => this.setState({ email })}></TextInput>
                  <TextInput placeholder="new password" onChangeText={(password) => this.setState({ password })} caretHidden></TextInput>
                  <Button title="createNew" onPress={() => { this.onCreateNew() }}>"Create"</Button>
                </View>
              </View>
            </Modal>
            <TextInput placeholder="username" onChangeText={(email) => this.setState({ email })}></TextInput>
            <TextInput placeholder="password" onChangeText={(password) => this.setState({ password })}></TextInput>
            <Button title="login" onPress={() => { this.onSignIn() }}>"Login"</Button>
            <Button title="create" onPress={() => { this.setModalVisible(true) }}>"Create Account"</Button>
          </SafeAreaView>
      
    )
    
    }

  }


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})

export default LoginPage;