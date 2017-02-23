var React = require('react');
var ReactNative = require('react-native');
var ScrollViewExample = require('./ScrollViewExample.js');
var SampleCompnent = require('./SampleCompnent.js');

import {
  View,
  Navigator
} from 'react-native';

var FirstPage = React.createClass({
  render (){
    return(
      <SampleCompnent />
    );
  },
});

module.exports = FirstPage;
