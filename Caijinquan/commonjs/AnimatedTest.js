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
  Animated
} from 'react-native';

export default class AnimatedTest extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement {
    return (
      <Animated.Image
       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{
         flex: 1,
         transform:[
           {scale: this.state.bounceValue},
         ]
       }}
       />

    );
  }
  componentDidMount() {
   this.state.bounceValue.setValue(2.5);     // 设置一个较大的初始值
   Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
     this.state.bounceValue,                 // 将`bounceValue`值动画化
     {
       toValue: 0.5,                         // 将其值以动画的形式改到一个较小值
       friction: 1.0,                          // Bouncier spring
     }
   ).start();                                // 开始执行动画
 }
}


module.exports = AnimatedTest;
