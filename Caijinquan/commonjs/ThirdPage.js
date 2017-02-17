var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
} = ReactNative;

var ThirdPage = React.createClass({
  render (){
    return(
      <View style={styles.container}>
        <Text> ThirdPage </Text>
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
module.exports = ThirdPage;
