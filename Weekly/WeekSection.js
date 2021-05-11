//large white box which will take a map ( Text to data), the map will b e all individual tasks. the data will indicate if the task is 
// boolean and if it has a reminder added

import React, { Component } from 'react';
import { Button, View } from 'react-native';

class WeekSection extends Component {
    constructor(props){
        super(props)

        this.state ={
            title = props.title,
            tasks = props.tasks
        }


    }
    render() {
        return (
            <View>
            <View style={{
              flexDirection: "row",
              paddingTop: 25,
              paddingHorizontal: 10,
            }}>
                <TextInput style={{fontSize: 25, marginTop: 15, textAlign: "center", textDecorationStyle: 'solid',}}  onChangeText={this.changeTitle}/>
            </View>
                

                <Button title='Add new task' onPress={this.addTask} />
            </View>
        );
    }
}

export default WeekSection;