import React, {Component} from 'react';
import {
 View,
 Text,
 TouchableOpacity,
 Button,
} from 'react-native';

export default  class FunctionExample extends React.Component {

  sayHi=()=>{
    console.log('Hai');
  };
  sayGoodby = () => {
    console.log('goodBy');
  };

  sayNiceTo=(someOne) => {
    console.log('sayNiceTo You');
  };

  render() {
    return(
      <View style={{paddingTop: 44}}>
        <TouchableOpacity onPress={this.sayHi}>
          <Text>sayHi</Text>
        </TouchableOpacity>
        <Button
        onPress={this.sayNiceTo}
        title="Press Purple"
        color="#841584"
        accessibilityLabel="Learn more about purple"
        />
      </View>
    );
  };

}

module.exports = FunctionExample;
