import React, {Component, PropTypes} from 'react';
import{
  View,
  Text,
  TouchableHighlight,

}from 'react-native';

export default class MyScene extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    printLog: PropTypes.func.isRequired,
  }
  render(){
    return(
      <View style={{padding:20}}>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.printLog}>
          <Text>点我打击日志</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
