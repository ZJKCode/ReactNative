var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} = ReactNative;

var ScrollViewExample = React.createClass({
  render (){
    var _scrollView1: ScrollView;
    var _scrollView: ScrollView;
    return(
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView1 = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true} // 属性设置为true 表示沿着row轴方向
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView1.scrollTo({x: 0}); }}>
          <Text>Scroll to start</Text>
        </TouchableOpacity>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{_scrollView.scrollTo({y:0});}}>
          <Text>Scroll to top</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState){
    return false;
  },
  render: function() {
    return(
      <View style={styles.button} >
        <Image style={styles.img} source={{uri: this.props.uri}}/>
      </View>
    );
  },
});
var THUMBS = ['https://avatars2.githubusercontent.com/u/8746235?v=3&s=460', 'https://avatars2.githubusercontent.com/u/8746235?v=3&s=460', 'https://avatars2.githubusercontent.com/u/8746235?v=3&s=460','https://avatars2.githubusercontent.com/u/8746235?v=3&s=460', 'https://avatars2.githubusercontent.com/u/8746235?v=3&s=460', 'https://avatars2.githubusercontent.com/u/8746235?v=3&s=460'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
// Thumb 类在创建的时候并没有声明这些属性，但是在利用属性的传值得时候，在thumb类中利用this.props.uri就可以接收这个数值了

var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 200,
  },
  containerPage:{
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },

  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  },
});

module.exports = ScrollViewExample;
