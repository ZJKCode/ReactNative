var React = require('react');
var Demensions = require('Dimensions');
var ReactNative = require('react-native');
var PageControl = require('react-native-page-control');
var SecondPage = require('./SecondPage.js');

var {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} = ReactNative;

var _scrollView1: ScrollView;
var index=0;
var screen = Demensions.get('window');

var ScrollViewExample = React.createClass({


  getInitialState: function () {
    return {
        currentPage:0
    };
  },

  onScroll :function (event) {
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth/2)/pageWidth) + 1
    });
  },
  scrollTo:function () {
    _scrollView1.scrollTo({x: 0});
    index = 0;
  },
  onItemTap:function (itemIndex) {
    console.log(index);
      _scrollView1.scrollTo({x:screen.width*itemIndex});
      index = itemIndex;
  },
  componentDidMount (){
    setInterval(()=>{
      _scrollView1.scrollTo({x:screen.width*index});
      if (index===5) {
        index = 0;
      }else {
        index++;
      }
    },2000);
  },
  popTo(){
    const{navigator} = this.props;
    if (navigator) {
      navigator.pop();
    }
  },
  render (){
    var _scrollView: ScrollView;
    return(
      <View style={{width:screen.width}}>
       <View>
       <ScrollView
         ref={(scrollView) => { _scrollView1 = scrollView; }}
         automaticallyAdjustContentInsets={false}
         horizontal={true} // 属性设置为true 表示沿着row轴方向
         showsHorizontalScrollIndicator={false}
         pagingEnabled={true}
         onScroll={this.onScroll}
         style={[styles.scrollView, styles.horizontalScrollView]}>
         {THUMBS.map(createAdThumbRow)}
       </ScrollView>
       <PageControl
         style = {styles.pageControl}
         numberOfPages={THUMBS.length}
         currentPage = {this.state.currentPage}
         hidesForSinglePage = {true}
         pageIndicatorTintColor = 'gray'
         indicatorSize = {{width:8, height:8}}
         currentPageIndicatorTintColor = 'black'
         onPageIndicatorPress = {this.onItemTap}
       />
       </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.scrollTo}>
          <Text>Scroll to start</Text>
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

var AdScroll = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState){
    return false;
  },
  render: function() {
    return(
      <View style={styles.adContent}>
        <Image style = {styles.adImg} source={{uri: this.props.uri}}/>
      </View>
    );
  },
});

var THUMBS = ['https://static.caijinquan.com/group1/M00/00/1D/ZcnSpFfE9RyAfLFwAACyOYrMIQs602.png', 'https://static.caijinquan.com/group1/M00/00/15/ZcnS4VeLR0KAK2XpAAGlqzV2bRI213.jpg', 'https://static.caijinquan.com/group1/M00/00/19/ZcnS4VelZqKAe859AAJ7SWP3Ud0308.jpg'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
// Thumb 类在创建的时候并没有声明这些属性，但是在利用属性的传值得时候，在thumb类中利用this.props.uri就可以接收这个数值了


var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;
var createAdThumbRow = (uri, i) => <AdScroll key={i} uri={uri} />;

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
  adContent: {
    margin:0,
    padding:0,
    alignItems:'center',
    borderRadius:3,
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
  adImg: {
    height:200,
    width: screen.width,

  },
  pageControl:{
    position:'absolute',
    left:0,
    right:0,
    bottom:10,
  }
});

module.exports = ScrollViewExample;
