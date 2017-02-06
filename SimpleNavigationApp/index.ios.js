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
  View,
  Navigator,
} from 'react-native';
import MyScene from './MyScene';

export default class SimpleNavigationApp extends Component {
  render() {
    return (
    <Navigator
      initialRoute={{ title: 'My Initial Scene',index: 0 }}
      renderScene={(route, navigatior) =>
        <MyScene
          title={route.title}
          onForward={() => {
            const nextIndex = route.index + 1;
            navigatior.push({
              title: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigatior.pop();
            }
          }}
          printLog={() =>{
            console.log('hello');
          }}
        />
      }
    />
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

AppRegistry.registerComponent('SimpleNavigationApp', () => SimpleNavigationApp);
