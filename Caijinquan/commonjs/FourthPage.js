var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
} = ReactNative;

var FourthPage = React.createClass({
  render (){
    return(
      <View style = {styles.container}>
        <Text> FourthPage </Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = FourthPage;
