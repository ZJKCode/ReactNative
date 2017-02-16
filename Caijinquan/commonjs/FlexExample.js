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

export default class SimpleAppMovies extends Component {
  render() {
    return (
      <View style={styles.test}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width:100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 5, backgroundColor:'powderblue'}}/>

        <View style={{height: 150, backgroundColor: 'steelblue'}} />
        <View style={{height: 5, backgroundColor:'powderblue'}}/>
        <View style={{width: 200, height: 200, backgroundColor: 'powderblue'}} />

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
  test:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
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

module.exports = SimpleAppMovies;
