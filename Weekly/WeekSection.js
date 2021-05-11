//large white box which will take a map ( Text to data), data contains if the task is completed

import Checkbox from "expo-checkbox";
import React, { Component } from "react";
import { Button, FlatList, View, TextInput } from "react-native";

var testMap = new Map();
testMap.set("Some Text", {text: 'Some Text',completed: false});
testMap.set("Some more Text", {text: 'Some more Text',completed: false});
testMap.set("even Text", {text: 'even Text',completed: false});
testMap.set("Some Text", {text: 'Some Text',completed: true}); //double checking override
class WeekSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      titleComplete: props.titleComplete,
      tasks: props.tasks,
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask() {
    testMap.set("add new", false);
    var te = testMap.get("add new")
    console.log(te)
  }

  render() {
    return (
      <View
        style={{
          paddingVertical: 5,
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
            onChangeText={this.changeTitle}
          />
          <Checkbox
            style={{ flex: 0 }}
            value={this.state.completed}
            onValueChange={(value) => this.setState({ titleComplete: value })}
          />
        </View>
        {toDoPair({ text: "first", checked: false })}
        {toDoPair({ text: "second", checked: true })}
        <FlatList
          data={testMap.values()}
          renderItem={({ item }) => (
            <Text>HI</Text>
          )}
        />
        <Button title="Add new task" onPress={this.addTask} color="grey" />
      </View>
    );
  }
}

const toDoPair = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 25,
      }}
    >
      <TextInput
        style={{
          fontSize: 14,
          textAlign: "left",
          textDecorationStyle: "solid",
          width: "90%",
        }}
        value={props.text}
        placeholder="TODO item"
        onChangeText={() => {}}
      />
      <Checkbox
        style={{ flex: 0 }}
        value={props.checked}
        onValueChange={(value) => (props.checked = value)}
      />
    </View>
  );
};

export default WeekSection;
