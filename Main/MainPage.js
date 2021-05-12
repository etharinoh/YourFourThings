import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../Login/Login";
import JournalMainPage from "../Journal/JournalMainPage";
import SearchPage from "../Search/SearchPage";
import WeeklyPlanPage from "../Weekly/WeeklyPlanPage";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchJournals} from "../redux/action";
import "./Thing";
import Thing from "./Thing";
import firebase from "../Firebase/config";

import DateTimePicker from "@react-native-community/datetimepicker";

import TagInput from "react-native-tags-input";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    
    if (this.props.route.params != undefined) {
      this.state = {
        date: this.props.route.params.date.toDate(),
        show: false,
  
        tags: {
          tag: "",
          tagsArray: [],
        },
        reflection: "",
      };
    }
    else{
      this.state = {
        date: new Date(),
        show: false,
  
        tags: {
          tag: "",
          tagsArray: [],
        },
        reflection: "",
      };
    }
    this.thingOne = React.createRef();
    this.thingTwo = React.createRef();
    this.thingThree = React.createRef();
    this.thingFour = React.createRef();
  }

  updateTagState = (state) => {
    this.setState(
      {
        tags: state,
      },
      () => {}
    );
  };

  componentDidMount() {
      this.props.fetchUser();
        this.updateThings();
      
    }

  setDate = (event, date) => {
    this.setState({ date: date, show: false });
    this.updateThings();
  };

  publish = () => {
    var thing1 = this.thingOne.current.state;
    var thing2 = this.thingTwo.current.state;
    var thing3 = this.thingThree.current.state;
    var thing4 = this.thingFour.current.state;

    const date = this.state.date;

    const thing1Text = thing1.text;
    const thing1Bool = thing1.completed;

    const thing2Text = thing2.text;
    const thing2Bool = thing2.completed;

    const thing3Text = thing3.text;
    const thing3Bool = thing3.completed;

    const thing4Text = thing4.text;
    const thing4Bool = thing4.completed;

    const tags = this.state.tags;

    const reflection = this.state.reflection;

    firebase
      .firestore()
      .collection("things")
      .doc(firebase.auth().currentUser.uid)
      .collection('dates')
      .doc(date.toDateString())
      .set({
        date,
        thing1Text,
        thing1Bool,
        thing2Text,
        thing2Bool,
        thing3Text,
        thing3Bool,
        thing4Text,
        thing4Bool,
        tags,
        reflection,
      });
  };

  updateThings = () => {
    firebase
      .firestore()
      .collection("things")
      .doc(firebase.auth().currentUser.uid)
      .collection('dates')
      .doc(this.state.date.toDateString())
      .get()
      .then((result) => {
        if (result.data() === undefined) {
          this.thingOne.current.setState({ text: "", completed: false });

          this.thingTwo.current.setState({ text: "", completed: false });
          this.thingThree.current.setState({ text: "", completed: false });
          this.thingFour.current.setState({ text: "", completed: false });

          this.setState({
            reflection: "",
            tags: {
              tag: "",
              tagsArray: [],
            },
          });
        } else {
          this.thingOne.current.setState({
            text: result.data().thing1Text,
            completed: result.data().thing1Bool,
          });

          this.thingTwo.current.setState({
            text: result.data().thing2Text,
            completed: result.data().thing2Bool,
          });
          this.thingThree.current.setState({
            text: result.data().thing3Text,
            completed: result.data().thing3Bool,
          });
          this.thingFour.current.setState({
            text: result.data().thing4Text,
            completed: result.data().thing4Bool,
          });

          this.setState({
            reflection: result.data().reflection,
            tags: {
              tag: "",
              tagsArray: result.data().tags.tagsArray,
            },
          });
        }
      })
      .catch({});
  };
  showDatepicker = () => {
    this.setState(() => (this.state.show = true));
  };

  render() {
    const { currentUser } = this.props;
    if (currentUser == null) {
      return (
        <View>
          <Text>Please Login</Text>
        </View>
      );
    }
    return (
      <SafeAreaView
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 25,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 20, flex: 1 }}>YourFourThings</Text>
            <Button title="Publish" onPress={this.publish} color="purple" />
            <Button title="Choose Date" onPress={this.showDatepicker}></Button>
            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={this.setDate}
              />
            )}
          </View>

          <Text style={{ padding: 10 }}>
            Hi {currentUser.username}, your four things for{" "}
            {this.state.date.toDateString()} are:
          </Text>
          <View>
            <Thing ref={this.thingOne} number="1" text="" completed={false} />
            <Thing ref={this.thingTwo} number="2" text="" completed={false} />
            <Thing ref={this.thingThree} number="3" text="" completed={false} />
            <Thing ref={this.thingFour} number="4" text="" completed={false} />
          </View>

          <View
            style={{
              backgroundColor: "grey",
              width: 400,
              margin: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Tags:</Text>
            <TagInput
              updateState={this.updateTagState}
              tags={this.state.tags}
              placeholder="Tags..."
              inputContainerStyle={[
                styles.textInput,
                { backgroundColor: this.state.tagsColor },
              ]}
              inputStyle={{ color: this.state.tagsText }}
              onFocus={() =>
                this.setState({ tagsColor: "#fff", tagsText: "#3ca897" })
              }
              onBlur={() =>
                this.setState({ tagsColor: "#3ca897", tagsText: "#fff" })
              }
              tagStyle={styles.tag}
              tagTextStyle={styles.tagText}
              keysForTag={", "}
            />
          </View>
          <View
            style={{
              backgroundColor: "grey",
              width: 400,
              margin: 10,
              borderRadius: 5,
              padding: 15,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Reflection: </Text>
            <TextInput
              onChangeText={(reflection) => this.setState({ reflection })}
              placeholder="Type your reflection for today here"
              value={this.state.reflection}
              multiline
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3ca897",
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: "#fff",
  },
  tagText: {
    color: "#3ca897",
  },
});
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, fetchJournals }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MainPage);
