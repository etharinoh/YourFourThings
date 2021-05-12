import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

var navigation
class SearchItem extends Component {
    constructor(props){
        super(props)
        navigation = props.navigation
       if(this.props.method == "Journals"){
        this.state = {
            journalTitle: props.data.title,
            journalText: props.data.text,
            method: props.method,
        }
       }else{
           this.state = {
            journalTitle: props.data.date,
            journalText: props.text,
            method: props.method,
        } 
       }
          
       
        
        this.onHeaderPress = this.onHeaderPress.bind(this)

        //console.log(this.state)
    }
    onHeaderPress(){
        if(this.state.method == "Journals"){
            navigation.navigate('Journal',{searchRedirect: true, text: this.state.journalText, title: this.state.journalTitle})
        }
        else{
            navigation.navigate('Home',{date: this.state.journalTitle, searchRedirect: true,})
        }
        
    }
    render() { 
        if(this.state.method == "Journals"){
            return (
                <View style={{backgroundColor: 'white', borderRadius: 5, marginHorizontal: "2%", marginVertical: '1%', borderWidth: 2}}>
                <TouchableOpacity onPress={this.onHeaderPress}>
                    <Text style={{fontSize: 24, textAlign: 'center', padding: 10}}>{this.state.journalTitle}</Text>
                </TouchableOpacity>
                    
                </View>
            );
        }
        else{
        return (
            <View style={{backgroundColor: 'white', borderRadius: 5, marginHorizontal: "2%", marginVertical: '1%', borderWidth: 2}}>
            <TouchableOpacity onPress={this.onHeaderPress}>
                <Text style={{fontSize: 24, textAlign: 'center', padding: 10}}>{this.state.journalTitle.toDate().toDateString()}</Text>
            </TouchableOpacity>
                
            </View>
        );
    }
    }
}

export default SearchItem;