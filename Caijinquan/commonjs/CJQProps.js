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

export default class CJQProps extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
      <View style={styles.container}>
        <Greeting name = 'Rexxar' />
        <Image source={pic} style={styles.img} />
        <Greeting name = 'Jxar' />
        <Image source={pic} style={styles.img} />
        <Greeting name = 'Vxar' />
        <Image source={pic} style={styles.img} />

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
  img: {
    width: 100,
    height: 100,
  },
});

module.exports = CJQProps;
