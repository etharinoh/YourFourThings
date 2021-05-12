import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

var navigation
/**
 * This is used to define the objects created to navigate from the main page of journals to its subsequent pages
 */
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

    }
    /**
     * This is the onPress method which will use the given props to navigate to the entry page with the infomration to populate it
     */
    onHeaderPress(){
        navigation.navigate('Entry',{newJournal: false, text: this.state.journalText, title: this.state.journalTitle})
    }
    /**
     * 
     * @returns The render method returns the jsx element populated with the prop values and creates the onpress method
     */
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