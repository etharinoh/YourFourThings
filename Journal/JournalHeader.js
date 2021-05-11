import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

var navigation
class JournalHeader extends Component {
    constructor(props){
        super(props)
        navigation = props.navigation
       
        this.state = {
            journalTitle: props.title,
            journalText: props.text,
            props: props,
        }
        this.onHeaderPress = this.onHeaderPress.bind(this)

        //console.log(this.state)
    }
    onHeaderPress(){
        console.log(this.state)
        navigation.navigate('Entry',{newJournal: false, text: this.state.journalText, title: this.state.journalTitle})
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