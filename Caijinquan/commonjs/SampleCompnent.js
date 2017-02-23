import React from 'react';
import{
  View,
  Navigator
}from 'react-native';

import FirstPageCompnent from './FirstPageCompnent.js';
import ScrollViewExample from './ScrollViewExample.js';

export default class SampleCompnent extends React.Component{

  render() {
    let defaultName = 'FirstPageCompnent';
    let defaultCoponent = FirstPageCompnent;

    return(
      <Navigator
        initialRoute={{name:defaultName, component:defaultCoponent}}
        configureScene={(route)=>{
          return Navigator.SceneConfigs.PushFromRight;
          /*

          Navigator.SceneConfigs.PushFromRight (默认)
          Navigator.SceneConfigs.FloatFromRight
          Navigator.SceneConfigs.FloatFromLeft
          Navigator.SceneConfigs.FloatFromBottom
          Navigator.SceneConfigs.FloatFromBottomAndroid
          Navigator.SceneConfigs.FadeAndroid
          Navigator.SceneConfigs.HorizontalSwipeJump
          Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
          Navigator.SceneConfigs.VerticalUpSwipeJump
          Navigator.SceneConfigs.VerticalDownSwipeJump
          */
        }}
        renderScene={(route,navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}
module.exports = SampleCompnent;
