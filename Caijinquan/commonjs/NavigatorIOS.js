/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Myscene,
          title: 'My Inital Scene'
        }}
        style={{flex: 1}}
      />
    );
  }
}

class Myscene extends Component {
  static propTypes = {
  title: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
}

constructor(props, context) {
  super(props, context);
  this._onForward = this._onForward.bind(this);
}

_onForward() {
  this.props.navigator.push({
    title: 'Scene ' + nextIndex,
  });
}

render() {
  return (
    <View>
      <Text>Current Scene: { this.props.title }</Text>
      <TouchableHighlight onPress={this._onForward}>
        <Text>Tap me to load the next scene</Text>
      </TouchableHighlight>
    </View>
  )
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
});

module.exports = NavigatorIOSApp;
