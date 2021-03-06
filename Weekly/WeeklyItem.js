import React, { Component } from "react";
import { Button, FlatList, View, TextInput } from "react-native";

import Checkbox from "expo-checkbox";

/**
 * The component for creating each item for the weekly section
 */
class WeeklyItem extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.textRef = React.createRef
    this.completeRef = React.createRef
  }
  /**
   * 
   * @returns Renders according to the props it was given
   */
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 25,
        }}
      >
        <TextInput
          ref={this.textRef}
          style={{
            fontSize: 14,
            textAlign: "left",
            textDecorationStyle: "solid",
            width: "90%",
          }}
          defaultValue={this.props.text}
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
