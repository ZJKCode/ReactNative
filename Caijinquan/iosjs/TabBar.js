'use strict';
var React = require('react');
var ReactNative = require('react-native');
var SimpleNavigationApp = require('../commonjs/SimpleNavigationApp');
var FirstPage = require('../commonjs/FirstPage.js');
var SecondPage = require('../commonjs/SecondPage.js');
var ThirdPage = require('../commonjs/ThirdPage.js');
var FourthPage = require('../commonjs/FourthPage.js');

var {
  StyleSheet,
  Text,
  TabBarIOS,
  View,
}=ReactNative;

var TabBar = React.createClass({
  statics: {
    title: '<TabBar>',
    description: 'Tab-based navigation',
  },
  displayName: 'TabBar',

  getInitialState:function () {
    return {
      selectedTab: 'mainTab',
      notifCount:0,
      presses:0,
      selectedIndex:0,
    };
  },

  _renderContent: function (color: string, pageText: string, num?: number ) {
    if (num==0) {
      return(
        <FirstPage />
      );
    }else if (num==1) {
      return(
        <SecondPage />
      );
    }else if (num==2) {
      return(
        <ThirdPage />
      );
    }else if (num==3) {
      return(
        <FourthPage />
      );
    }
  },
  render() {
    return (
    <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          icon = {require('./tabBar/mainPage.png')}
          selectedIcon = {require('./tabBar/mainPageSelect.png')}
          title = '主页'
          renderAsOriginal
          selected = {this.state.selectedTab === 'mainTab'}
          onPress={() => {
              this.setState({
                selectedTab: 'mainTab',
                presses: this.presses + 1,
                selectedIndex: 0
              });
            }}>
        {this._renderContent('#21551C', 'Green Tab', this.state.selectedIndex)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon = {require('./tabBar/touzi.png')}
          selectedIcon = {require('./tabBar/touziSelect.png')}
          title = '投资'
          renderAsOriginal
          selected = {this.state.selectedTab=='touziTab'}
          onPress={
            () => {
              this.setState({
                selectedTab: 'touziTab',
                presses: this.presses + 1,
                selectedIndex: 1
              });
            }
          }
        >
        {this._renderContent('#21551C', 'touziTab Tab', this.state.selectedIndex)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon = {require('./tabBar/find.png')}
          selectedIcon = {require('./tabBar/findSelect.png')}
          title = '发现'
          renderAsOriginal
          badge={this.state.notifCount>0? this.state.notifCount: undefined}
          selected = {this.state.selectedTab=='findTab'}
          onPress={
            () => {
              this.setState({
                selectedTab: 'findTab',
                presses: this.presses + 1,
                notifCount: this.state.notifCount + 1,
                selectedIndex: 2
              });
            }
          }
        >
        {this._renderContent('#21551C', 'findTab', this.state.selectedIndex)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon = {require('./tabBar/zhanghu.png')}
          selectedIcon = {require('./tabBar/zhanghuSelect.png')}
          title = '账户'
          renderAsOriginal
          selected = {this.state.selectedTab=='zhanghuTab'}
          onPress={
            () => {
              this.setState({
                selectedTab: 'zhanghuTab',
                presses: this.presses + 1,
                selectedIndex: 3
              });
            }
          }
        >
        {this._renderContent('#783E33', 'zhanghuTab', this.state.selectedIndex)}
        </TabBarIOS.Item>
    </TabBarIOS>
    );
  }

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  test:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
});

module.exports = TabBar;
