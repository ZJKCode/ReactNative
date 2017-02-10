import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class iOSRN extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Ract Native
        </Text>
        <Text style={styles.instructions}>
          To get start, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to Reload, {'\n'}
          Cmd+D or shake for dev menu{'\n'}
          这个本地iOS项目和React 混合编程的一个例子{'\n'}
          iOS和reactnative 混合开发，扮演的角色可以是MVC中任何一种
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
});

// 项目名称有所对应
AppRegistry.registerComponent('iOSRN', () => iOSRN)
