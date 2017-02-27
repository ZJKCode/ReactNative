var React = require('react');
var ReactNative = require('react-native');
var ScrollViewExample = require('./ScrollViewExample.js');
var SampleCompnent = require('./SampleCompnent.js');
var WebViewExample = require('./WebViewExample.js');
var FunctionExample = require('./FunctionExample.js');
var ToggleAnimatingActivityIndicator = require('./ToggleAnimatingActivityIndicator.js');
import {
  View,
  Navigator
} from 'react-native';

var FirstPage = React.createClass({
  render (){
    return(
      <ToggleAnimatingActivityIndicator />
    );
  },
});

module.exports = FirstPage;
