import React from 'react';
import{
  View,
  Navigator,
  TouchableOpacity,
  Text,
} from 'react-native';

import FirstPageCompnent from './FirstPageCompnent.js';
import ScrollViewExample from './ScrollViewExample.js';

const USER_MODELS = {
  1: {name:'金三胖同志',age:23},
  2: {name:'小习同志',age: 60}
};
export default class SecondPageCompnent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }
  componentDidMount(){
    this.setState({
      id: this.props.id
    });
  }
  _pressButton() {
    const {navigator} = this.props;
    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    if (navigator) {
      navigator.pop();
    }
  }
  _pushToScrollView() {
    const {navigator} = this.props;
    if (navigator) {
  console.log('进入下一页');
    }
  }

  render (){
    return(
      <View style={{marginTop:20}} >
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
      <Text>点我回去 </Text>
      <Text> 回去</Text>
      </TouchableOpacity>
      <Text> 获得的参数： id={ this.state.id }</Text>
      <TouchableOpacity onPress={this._pushToScrollView.bind(this)}>
      <Text>点我进入下一页 </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
