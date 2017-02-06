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
  Image
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      // XML的标签化语言，结构的语法称为JSX语法
      <Text style = {styles.welcome}>Hello {this.props.name}</Text>
    );
  }
}

export default class Caijinquan extends Component {
  render() {

    return(
      <View>
        <Greeting name = 'Rexxar' />
        <Greeting name = 'Jxar' />
        <Greeting name = 'Vxar' />
        // 最简单的给组件设定尺寸，指定固定的width和height，React Native中的尺寸都是无单位的
        // <View style={width: 50, height: 50, backgroundColor: 'powderblue'} />
        // <View style={width: 100, height: 100, backgroundColor: 'skyblue'} />
        // <View style={width: 150, height: 150, backgroundColor: 'steelblue'} />

      </View>
    );
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    // return (
    //   <Image source={pic} style={{width: 193, height: 200}} />
    // );

    // return (
    //   console.log('开始');
    //   // <View style={styles.container}>
    //   //   <Text style={styles.welcome}>
    //   //     Welcome to React Native!
    //   //   </Text>
    //   //   <Text style={styles.welcome}>
    //   //   财金圈!!!{'\n'}
    //   //   AppRegistry Native
    //   //   </Text>
    //   //   <Text style={styles.instructions}>
    //   //     To get started, edit index.ios.js
    //   //   </Text>
    //   //   <Text style={styles.instructions}>
    //   //     Press Cmd+R to reload,{'\n'}
    //   //     Cmd+D or shake for dev menu
    //   //   </Text>
    //   // </View>
    //   // <Image source={pic} style={{width: 193, height: 100}}/>
    //
    // );
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

AppRegistry.registerComponent('Caijinquan', () => Caijinquan);
