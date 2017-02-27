import React from 'react';
import{
  View,
  Navigator,
  TouchableOpacity,
  Text,
} from 'react-native';

import SecondPageCompnent from './SecondPageCompnent';

export default class FirstPageCompnent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      user: null,
    };
  }
  _pressButton() {
    let _this = this;
    console.log('跳转下一页');
    const {navigator} = this.props;
    if (navigator) {
      navigator.push ({
        name: 'SecondPageCompnent',
        component: SecondPageCompnent,
        params:{
          id: this.state.id,
          getUser: function(user){
            console.log(user);
            _this.setState({
              user: user
            })
          }
        }
      })
    }
  }

  render (){
      if (this.state.user) {
        return(
          <View style={{marginTop:20}}>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
            <Text>点我跳转 </Text>
            <Text>跳</Text>
            <Text>查询ID为{this.state.id}的用户信息</Text>
          </TouchableOpacity>

            <Text>用户信息：{JSON.stringify(this.state.user)}</Text>
            <Text>用户信息：{JSON.stringify(this.state.user)}</Text>
            <Text>用户信息：{JSON.stringify(this.state.user)}</Text>

          </View>
        );

      }else {
        return(
          <View style={{marginTop:20}}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text>点我跳转 </Text>
              <Text>跳</Text>
              <Text>查询ID为{this.state.id}的用户信息</Text>
            </TouchableOpacity>
          </View>
      );

    }
  }
}
