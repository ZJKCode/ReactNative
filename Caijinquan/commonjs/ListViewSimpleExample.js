/**
 * Created by zhangkuan on 2017/2/17.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Text,
    View,
} = ReactNative;

var  UIExplorePage = require('./UIExplorepage');

var  ListViewSimpleExample = React.createClass({
    statics: {
        title: '<ListView>',
        description: 'Performant, scrollable list of data'
    },

    getInitialState: function () {
        var ds = new  ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
        return{
            dataSource: ds.cloneWithRows(this._genRows({})),
        };
    },

    _pressData: (
        {}: {[key: number]: boolean}
        ),
    componentWillMount:function () {
      this._pressData{};
    };

    _renderRow: function(rowData: string, sectionID: number, rowID:number, highlightRow: (sectionID: number, rowID: number) => void){
        var  rowHash = Math.abs(hashCode(rowData));
        var  imageSource =
    }



})