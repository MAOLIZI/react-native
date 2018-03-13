import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/* 示例
 * <NoMore desc="没有更多..." />
 */

export default class NoMore extends Component {
  constructor(props) {
    super(props);

    let info = this.props;
    this.state = {
      desc: info.desc || "没有更多..",
    };
  }

  render() {
    let {desc} = this.state;

    return <View style={styles.view}>
      <Text style={styles.desc}>{`·——　${desc}　——·`}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  desc: {
    color: "#BBBBBB",
    fontSize: 10,
    textAlign: "center",
  },
});
