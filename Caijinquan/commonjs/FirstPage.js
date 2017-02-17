var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  ScrollView,
} = ReactNative;

var FirstPage = React.createClass({
  render (){
    return(
      <View>
        <ScrollView style={styles.TopScrollView}>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
          <Text>TopScrollView</Text>
        </ScrollView>
        <View style={styles.container}>
          <Text> FirstPage </Text>
        </View>
      </View>


    );
  },
});

const styles = StyleSheet.create({
  tapScorllView:{
    flex: 1,
    flexDirection: 'column',
    height: 30,
    backgroundColor: 'yellow',
    paddingHorizontal: 0,
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = FirstPage;
