import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class JournalHeader extends Component {
    constructor(props){
        super(props)

       
        this.state = {
            journalTitle: props.journalTitle,
            journal: {},
        }
    }
    onHeaderPress(){
        
    }
    render() {
        return (
            <View style={{backgroundColor: 'white', borderRadius: 5}}>
            <TouchableOpacity onPress={this.onHeaderPress}>
                <Text>{this.state.journalTitle}</Text>
            </TouchableOpacity>
                
            </View>
        );
    }
}

export default JournalHeader;