import React, { Component } from "react";
import { Button, FlatList, View, TextInput } from "react-native";

import Checkbox from "expo-checkbox";

class WeeklyItem extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
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
          value={this.props.text}
          placeholder="TODO item"
          onChangeText={(text) => {
              this.setState({text: text})
              }}
        />
        <Checkbox
          value={this.props.complete}
          onValueChange={ (value) => {this.setState({complete: value})}}
        />
      </View>
    );
  }
}

export default WeeklyItem;
