//large white box which will take a map ( Text to data), data contains if the task is completed

import Checkbox from "expo-checkbox";
import React, { Component } from "react";
import { Button, FlatList, View, TextInput } from "react-native";
import WeeklyItem from './WeeklyItem'

class WeekSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      titleComplete: props.titleComplete,
      tasks: props.tasks,
      update: false
    };
    this.props = props
    this.listRef = React.createRef();
    this.addTask = this.addTask.bind(this);
  }
  addTask() {
    console.log(this.listRef)
    
  }

  render() {
    return (
      <View
        style={{
          paddingVertical: 5,
          marginVertical: 5,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          backgroundColor: "white",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              fontSize: 18,
              textAlign: "left",
              textDecorationStyle: "solid",
              width: "90%",
            }}
            placeholder="TODO title"
            value={this.state.title}
            onChangeText={(text) => this.setState({ title: text })}
          />
          <Checkbox
            style={{ flex: 0 }}
            value={this.state.titleComplete}
            onValueChange={(value) => this.setState({ titleComplete: value })}
          />
        </View>
        <Button title="Add new task" onPress={this.addTask} color="grey" />
        
        {this.props.tasks.map((item)=>{
          return(
            <WeeklyItem text={item.txt} complete={item.complete} />
          )
          
        })}
        
      </View>
    );
  }
}


export default WeekSection;
