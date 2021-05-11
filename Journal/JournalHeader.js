import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class JournalHeader extends Component {
    constructor(props){
        super(props)

       
        this.state = {
            journalTitle: props.journalTitle,
            journal: {},
            props: props,
        }
    }
    onHeaderPress(){
        
    }
    render() {
        return (
            <View style={{backgroundColor: 'white', borderRadius: 5, marginHorizontal: "2%", marginVertical: '1%', borderWidth: 2}}>
            <TouchableOpacity onPress={this.onHeaderPress}>
                <Text style={{fontSize: 24, textAlign: 'center', padding: 10}}>{this.state.journalTitle}</Text>
            </TouchableOpacity>
                
            </View>
        );
    }
}

export default JournalHeader;