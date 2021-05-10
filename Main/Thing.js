import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';


class Thing extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            number: props.number,
            text: props.text,
            completed: props.completed
        }
    }
    

    render() {
        return (
            <View style={{flexDirection: 'row', borderWidth: 3, width: 350, paddingHorizontal: 20, paddingVertical: 10, margin: 10, borderRadius: 10}}>
                <Text style={{flex: 0.2, fontSize: 20}}>{this.state.number}</Text>
                <TextInput style={{flex: 1}} value={this.state.text} onChangeText={(text)=>{this.setState({text})}}></TextInput>
                <Checkbox style={{flex: 0}} value={this.state.completed} onValueChange={ (value) => this.setState({completed: value})} />
            </View>
        );
    }
}

export default Thing;