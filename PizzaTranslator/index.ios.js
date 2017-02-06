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
  TextInput,
  ScrollView,
  Image
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      // <View style={{padding: 10}}>
      // <TextInput
      //    style={{height: 40}}
      //    placeholder="Type here to translate!"
      //    onChangeText={(text) => this.setState({text})}
      //  />
      // <Text style={{padding: 10, fontSize: 42}}>
      //    {this.state.text.split('').map((word) => word && '🍕').join('')}
      // </Text>
      //
      // </View>
      <ScrollView>
          <Text style={{fontSize:40}}>Scroll me plz</Text>
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Text style={{fontSize:40}}>If you like</Text>
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Text style={{fontSize:40}}>Scrolling down</Text>
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Text style={{fontSize:40}}>What is the best </Text>
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Text style={{fontSize:40}}>Framework around? </Text>
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Image source={require('./icon.png')} />
          <Text style={{fontSize:40}}>React Native </Text>

      </ScrollView>
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
  textInput:{
    height: 40,
  },
});

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
