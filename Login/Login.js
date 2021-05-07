import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView, Modal, Alert } from 'react-native';
import firebase from '../Firebase/config'


class LoginPage extends Component {
  modalVisible
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      username: '',
      password: '',
      email: ''
    }
    modalVisible = this.state.modalVisible
    this.onCreateNew = this.onCreateNew.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
  }

  onCreateNew(){
    const { username, password, email} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result) => {console.log(result)
    this.setModalVisible(!this.state.modalVisible)
    Alert.alert("Success", "Please login",[
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ])})
    .catch((error) => {Alert.alert("Error", error.message,[
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]); console.log(error)})
  }

  onSignIn(){
    const { username, password, email} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
  }
  setModalVisible(visible) {
    console.log(visible);
    console.log(this.state);
    this.setState({ modalVisible: visible });
    console.log(this.state);
  }
  render (){
    
    return (
  <SafeAreaView style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible);
        }}
      ><View style={styles.centeredView}>
          <View style={styles.modalView}>
        <TextInput  placeholder="new username" onChangeText={(username) => this.setState({username})}></TextInput>
        <TextInput  placeholder="new email" onChangeText={(email) => this.setState({email})}></TextInput>
        <TextInput placeholder="new password" onChangeText={(password) => this.setState({password})}></TextInput>
        <Button title = "createNew" onPress={()=>{this.onCreateNew()}}>"Create"</Button>
        </View>
        </View>
      </Modal>
        <TextInput  placeholder="username"></TextInput>
        <TextInput placeholder="password"></TextInput>
        <Button title = "login">"Login"</Button>
        <Button title="create" onPress={() => {this.setModalVisible(true)}}>"Create Account"</Button>
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