import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

class LoginPage extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput  placeholder="username"></TextInput>
        <TextInput placeholder="password"></TextInput>
        <Button title = "login">"Login"</Button>
        <Button title="create">"Create Account"</Button>
        <Button title="forgotten">"Forgotten Password"</Button>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

// ...

export default LoginPage;