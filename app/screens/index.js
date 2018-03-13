
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

// 载入组件
import NoData from "app/common/components/NoData";
import NoMore from "app/common/components/NoMore";
import StarRating from "app/common/components/StarRating";

import {changeMarking} from "app/common/functions/changeMarking";
import {cutString} from "app/common/functions/cutString";
import {toMoney} from "app/common/functions/toMoney";

import CONFIG from "app/config";

class Box extends Component {
  render() {
    return <View style={styles.box}>
      {this.props.children}
    </View>;
  }
}

export default class Screens extends Component {
  render() {
    return <ScrollView style={styles.container}>
      <Box><NoData desc="这是一段可编辑文本..." /></Box>
      <Box><NoData onlyIcon={true} /></Box>

      <Box><NoMore desc="已加载全部内容，没有更多了" /></Box>

      <Box><StarRating stars={3.5} total={5} starSize={12} starSpacing={2} style={{marginTop: 5,}} /></Box>

      <Box><Text>￥{toMoney(20180313.1520)}</Text></Box>
      <Box><Text>￥{toMoney(20180313.1520, 3)}</Text></Box>

    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    margin: 10,
    backgroundColor: CONFIG.contentBGColor,
  },
});
