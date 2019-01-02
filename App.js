/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true}

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText }
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.name : " ";
    return (
      <Text>hello {display}!</Text>
    );
  }
}

class Queen extends Component {
  render() {
    let pic = {
      uri: 'https://github.com/HideOnBushTuT/CBReno-Blog/blob/master/contents/Images/queen.jpg'
    };
    return (
      <Image source={pic} style={{width: 100, height: 50}}/>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    // this.state = {isShowingText: true};

    // Toggle the state every second
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { isShowingText: !previousState.isShowingText };
    //   });
    // }, 1000);
  }

  render() {
    // let display = this.state.isShowingText ? "Reno" : "";
    return (
      <View>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>> */}
        <Greeting name="Reno"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
});
