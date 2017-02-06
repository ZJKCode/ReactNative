/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true};
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);

  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return(
      <Text>{display}</Text>
    );

  }
}
class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Blink text = 'I love to blink' />
        <Blink text = 'YES blinking us so great' />
        <Blink text = 'Why did they ever take this out of HTML' />
        <Blink text = 'Look at me look at me look at me' />
        <Text style={styles.red}>
          just red
        </Text>
        <Text style={styles.bigblue}>
          just bigblue
        </Text>
        <Text style={styles.bigblue, styles.red}>
          bigblue ,then red
        </Text>
        <Text style={styles.red, styles.bigblue}>
          red, then bigblue
        </Text>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
